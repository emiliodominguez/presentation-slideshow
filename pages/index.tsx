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
import TextSlide from "@app/components/Slides/TextSlide";
import TextAndImageSlide from "@app/components/Slides/TextAndImageSlide";
import CenteredTextSlide from "@app/components/Slides/CenteredTextSlide";
import ElementsSlide from "@app/components/Slides/ElementsSlide";
import ElementsAltSlide from "@app/components/Slides/ElementsAltSlide";
import QuoteSlide from "@app/components/Slides/QuoteSlide";
import KeyFiguresSlide from "@app/components/Slides/KeyFiguresSlide";
import ChartSlide from "@app/components/Slides/ChartSlide";

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
    const presentationContent: PresentationContent = localizedContent
        ? localizedContent.data
        : { project_client: [], project_title: [], project_description: [], body: [] };

    /**
     * Gets the current slide by it's type
     */
    function getCurrentSlide(): JSX.Element {
        const slide = presentationContent.body[currentIndex];

        if (!slide) return <ErrorSlide />;

        const { slice_type, primary, items } = slide;
        const client = presentationContent.project_client;
        const title = presentationContent.project_title;
        const content = {
            ...primary,
            client: client && client.length > 0 ? client[0].text : null,
            presentation_title: title && title.length > 0 ? title[0].text : null
        } as any;

        switch (slice_type) {
            case "title_slide":
                return <IntroductionSlide content={content} />;
            case "agenda_slide":
                return <AgendaSlide content={content} />;
            case "chapter_intro_slide":
                return <ChapterIntroSlide content={content} />;
            case "text_slide":
                return <TextSlide content={{ ...content, text_blocks: items }} />;
            case "text_and_image_slide":
                return <TextAndImageSlide content={content} />;
            case "centered_text_slide":
                return <CenteredTextSlide content={content} />;
            case "team_slide":
                return <TeamSlide content={{ ...content, team: items }} />;
            case "elements_slide":
                return <ElementsSlide content={{ ...content, elements: items }} />;
            case "elements_alt_slide":
                return <ElementsAltSlide content={{ ...content, elements: items }} />;
            case "quote_slide":
                return <QuoteSlide content={content} />;
            case "key_figures_slide":
                return <KeyFiguresSlide content={{ ...content, key_figures: items }} />;
            case "chart_slide":
                return <ChartSlide content={{ ...content, chart_items: items }} />;
            default:
                return <ErrorSlide />;
        }
    }

    /**
     * Gets the navigation items labels
     */
    function getNavigationItems(): string[] {
        return presentationContent.body.map((x, i) => {
            const id = x.primary.slide_navigation_id as TitleField;
            return id.length > 0 ? id[0].text : `Slide ${i + 1}`;
        });
    }

    useEffect(() => {
        if (presentationContent.body.length > 0)
            setCountRef.current(presentationContent.body.length);
    }, [presentationContent.body.length]);

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
