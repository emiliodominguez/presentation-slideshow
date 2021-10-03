import React, { useContext, useRef, useEffect } from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import PrismicDOM from "prismic-dom";
import { client } from "@app/config/prismic";
import { TitleField, RichTextField, SliceZone } from "@prismicio/types";
import { Document } from "@prismicio/client/types/documents";
import { LocalizationContext } from "@app/contexts/localization";
import { NavigationContext } from "@app/contexts/navigation";
import LanguageSelector from "@app/components/LanguageSelector";
import Navigation from "@app/components/Navigation";
import ErrorSlide from "@app/components/Slides/ErrorSlide";
import IntroductionSlide from "@app/components/Slides/IntroductionSlide";
import AgendaSlide from "@app/components/Slides/AgendaSlide";
import TeamSlide from "@app/components/Slides/TeamSlide";
import ChapterIntroSlide from "@app/components/Slides/ChapterIntroSlide";
import ElementsSlide from "@app/components/Slides/ElementsSlide";
import ElementsAltSlide from "@app/components/Slides/ElementsAltSlide";
import QuoteSlide from "@app/components/Slides/QuoteSlide";
import KeyFiguresSlide from "@app/components/Slides/KeyFiguresSlide";
import TextSlide from "@app/components/Slides/TextSlide";

export interface IndexPageProps {
    content: Document[];
}

interface PresentationContent {
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
    const localeContent = props.content?.find(x => x.lang === locale);
    const content: PresentationContent = localeContent
        ? localeContent.data
        : { project_title: [], project_description: [], body: [] };

    /**
     * Gets the current slide by it's type
     */
    function getCurrentSlide(): JSX.Element {
        const slide = content.body[currentIndex];

        if (!slide) return <ErrorSlide />;

        const { slice_type, primary, items } = slide;

        console.log({ ...primary, elements: items });

        switch (slice_type) {
            case "title_slide":
                return <IntroductionSlide content={primary as any} />;
            case "agenda_slide":
                return <AgendaSlide content={primary as any} />;
            case "chapter_intro_slide":
                return <ChapterIntroSlide content={primary as any} />;
            case "team_slide":
                return <TeamSlide content={{ ...primary, team: items } as any} />;
            case "elements_slide":
                return <ElementsSlide content={{ ...primary, elements: items } as any} />;
            case "elements_alt_slide":
                return <ElementsAltSlide content={{ ...primary, elements: items } as any} />;
            case "quote_slide":
                return <QuoteSlide content={primary as any} />;
            case "key_figures_slide":
                return <KeyFiguresSlide content={{ ...primary, key_figures: items } as any} />;
            case "text_slide":
                return <TextSlide content={{ ...primary, text_blocks: items } as any} />;
            default:
                return <ErrorSlide />;
        }
    }

    /**
     * Gets the navigation items labels
     */
    function getNavigationItems(): any[] {
        return content.body.map((x, i) =>
            x.primary.slide_navigation_id
                ? (x.primary.slide_navigation_id as TitleField)[0].text
                : `Slide ${i + 1}`
        );
    }

    useEffect(() => {
        if (content.body.length > 0) setCountRef.current(content.body.length);
    }, [content.body.length]);

    return (
        <>
            <Head>
                {content.project_title.length > 0 && <title>{content.project_title[0].text}</title>}

                <meta
                    name="description"
                    content={PrismicDOM.RichText.asText(content.project_description)}
                />
            </Head>

            {getCurrentSlide()}
            <LanguageSelector />
            <Navigation items={getNavigationItems()} />
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
