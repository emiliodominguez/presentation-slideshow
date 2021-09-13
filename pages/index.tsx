import { useContext, useState } from "react";
import Prismic from "@prismicio/client";
import { TitleField, RTNode, SliceZone } from "@prismicio/types";
import { Document } from "@prismicio/client/types/documents";
import { client } from "@app/config/prismic";
import { LocalizationContext } from "@app/contexts/localization";
import Layout from "@app/components/Layout";
import LanguageSelector from "@app/components/LanguageSelector";
import Navigation from "@app/components/Navigation";
import * as Slides from "@app/components/Slides/";

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
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const localeContent = props.content.find(x => x.lang === locale);
    const content = localeContent!.data as PresentationContent;

    /**
     * Gets the current slide by it's type
     */
    function getCurrentSlide(): JSX.Element {
        const slide = content.body[currentSlide];

        switch (slide.slice_type) {
            case "text_slide":
                return <Slides.TextSlide content={slide.primary as any} />;
            case "text_and_meme_slide":
                return <Slides.TextAndMemeSlide content={slide.primary as any} />;
            default:
                return <Slides.ErrorSlide />;
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

    return (
        <Layout>
            {getCurrentSlide()}

            <LanguageSelector />

            <Navigation
                items={getNavigationItems()}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />
        </Layout>
    );
}

export async function getStaticProps() {
    const { results: content } = await client.query(
        Prismic.Predicates.at("document.type", "presentation"),
        { lang: "*" }
    );

    return { props: { content } };
}
