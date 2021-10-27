import React, { useContext, useRef, useEffect, createContext } from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import PrismicDOM from "prismic-dom";
import { client } from "@app/config/prismic";
import { TitleField, RichTextField, ImageField, SliceZone } from "@prismicio/types";
import { Document } from "@prismicio/client/types/documents";
import { LocalizationContext } from "@app/contexts/localization";
import { NavigationContext } from "@app/contexts/navigation";
import LanguageSelector from "@app/components/LanguageSelector";
import Slide from "@app/components/Slides";
import Navigation from "@app/components/Navigation";

export interface IndexPageProps {
    content: Document[];
}

interface PresentationContent {
    project_client?: TitleField;
    project_title: TitleField;
    project_description: RichTextField;
    isologo_black: ImageField;
    isologo_white: ImageField;
    isologo_color: ImageField;
    logo_black: ImageField;
    logo_white: ImageField;
    logo_dark: ImageField;
    logo_light: ImageField;
    body: SliceZone;
}

export const GlobalDataContext = createContext<PresentationContent>({} as PresentationContent);

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
        <GlobalDataContext.Provider value={presentationContent}>
            <Head>
                {presentationContent.project_title.length > 0 && (
                    <title>{presentationContent.project_title[0].text}</title>
                )}

                <meta
                    name="description"
                    content={PrismicDOM.RichText.asText(presentationContent.project_description)}
                />
            </Head>

            <Slide key={`slide_${currentIndex}`} />
            <LanguageSelector />
            <Navigation />
        </GlobalDataContext.Provider>
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
