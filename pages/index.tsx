import React, { useContext, useRef, useEffect } from "react";
import Head from "next/head";
import { TitleField, RTNode, SliceZone } from "@prismicio/types";
import Prismic from "@prismicio/client";
import { client } from "@app/config/prismic";
import { Document } from "@prismicio/client/types/documents";
import { LocalizationContext } from "@app/contexts/localization";
import { NavigationContext } from "@app/contexts/navigation";
import Layout from "@app/components/Layout";
import LanguageSelector from "@app/components/LanguageSelector";
import Navigation from "@app/components/Navigation";
import TextSlide from "@app/components/Slides/TextSlide";
import ErrorSlide from "@app/components/Slides/ErrorSlide";
import IntroductionSlide from "@app/components/Slides/IntroductionSlide";
import AgendaSlide from "@app/components/Slides/AgendaSlide";

interface IndexPageProps {
    content: Document[];
}

interface PresentationContent {
    project_title: TitleField;
    project_description: RTNode;
    body: SliceZone;
}

/**
 * The main page component
 */
export default function IndexPage(props: IndexPageProps): JSX.Element {
    const { locale } = useContext(LocalizationContext);
    const { currentIndex, setCount } = useContext(NavigationContext);
    const setCountRef = useRef<(x: number) => void>(setCount);
    const localeContent = props.content.find(x => x.lang === locale);
    const content = localeContent!.data as PresentationContent;

    /**
     * Gets the current slide by it's type
     */
    function getCurrentSlide(): JSX.Element {
        const slide = content.body[currentIndex];

        if (!slide) return <ErrorSlide />;

        switch (slide.slice_type) {
            case "introduction_slide":
                return <IntroductionSlide content={slide.primary as any} />;
            case "agenda_slide":
                return <AgendaSlide content={slide.primary as any} />;
            case "text_slide":
                return <TextSlide content={slide.primary as any} />;
            default:
                return <ErrorSlide />;
        }
    }

    /**
     * Gets the navigation items labels
     */
    function getNavigationItems(): any[] {
        return content.body.map(
            x => (x.primary.slide_navigation_id as TitleField)[0].text
        );
    }

    useEffect(() => {
        if (content.body.length > 0) setCountRef.current(content.body.length);
    }, [content.body.length]);

    return (
        <Layout>
            <Head>
                <title>{content.project_title[0].text}</title>
                <meta
                    name="description"
                    content={(content.project_description as any)[0].text}
                />
            </Head>

            {getCurrentSlide()}
            <LanguageSelector />
            <Navigation items={getNavigationItems()} />
        </Layout>
    );
}

/**
 * Get static props function
 */
export async function getStaticProps() {
    const { results: content } = await client.query(
        Prismic.Predicates.at("document.type", "presentation"),
        { lang: "*" }
    );

    return { props: { content } };
}
