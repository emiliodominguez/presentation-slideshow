import React, { useContext, useRef, useEffect, Fragment } from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import PrismicDOM from "prismic-dom";
import { client } from "@app/config/prismic";
import { TitleField, RichTextField, SliceZone } from "@prismicio/types";
import { Document } from "@prismicio/client/types/documents";
import { LocalizationContext } from "@app/contexts/localization";
import { NavigationContext } from "@app/contexts/navigation";
import { getCurrentSlide } from "@app/components/Slides";
import Navigation, { getNavigationItems } from "@app/components/Navigation";
import Breadcrumbs from "@app/components/Shared/Breadcrumbs";
import LanguageSelector from "@app/components/LanguageSelector";

export interface IndexPageProps {
    content: Document[];
}

interface PresentationContent {
    project_client?: TitleField;
    project_title: TitleField;
    project_description: RichTextField;
    body: SliceZone;
}

/**
 * The main page component
 */
export default function IndexPage(props: IndexPageProps): JSX.Element {
    const { locale } = useContext(LocalizationContext);
    const { currentIndex, setCount } = useContext(NavigationContext);
    const setCountRef = useRef<(x: number) => void>(setCount);
    const localizedContent = props.content?.find(x => x.lang === locale);
    const presentationContent: PresentationContent | undefined = localizedContent?.data;

    useEffect(() => {
        if (presentationContent && presentationContent.body.length > 0)
            setCountRef.current(presentationContent.body.length);
    }, [presentationContent]);

    if (!presentationContent)
        throw new Error("Couldn't load the main content. Check your configuration!");

    return (
        <>
            <Head>
                {presentationContent.project_title.length > 0 && (
                    <title>{presentationContent.project_title[0].text}</title>
                )}

                <meta
                    name="description"
                    content={PrismicDOM.RichText.asText(presentationContent.project_description)}
                />
            </Head>

            <Breadcrumbs
                client={presentationContent.project_client}
                presentationTitle={presentationContent.project_title}
                chapterName={
                    presentationContent.body[currentIndex].primary.chapter_name as TitleField
                }
            />

            <Fragment key={`slide_${currentIndex}`}>
                {getCurrentSlide(presentationContent.body[currentIndex])}
            </Fragment>

            <LanguageSelector />
            <Navigation items={getNavigationItems(presentationContent.body)} />
        </>
    );
}

/**
 * Get static props function
 */
export async function getStaticProps() {
    let content: Document[] = [];

    try {
        const { results } = await client.query(
            Prismic.Predicates.at("document.type", String(process.env.PRISMIC_DOCUMENT_TYPE)),
            { lang: "*" }
        );

        content = results;
    } catch (error) {
        console.error("There was an error loading the initial content");
    } finally {
        return { props: { content } };
    }
}
