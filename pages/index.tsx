import React, { useContext, useRef, useEffect, useMemo } from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import PrismicDOM from "prismic-dom";
import { client } from "@app/config/prismic";
import { Document } from "@prismicio/client/types/documents";
import { LocalizationContext } from "@app/contexts/localization";
import { NavigationContext } from "@app/contexts/navigation";
import GlobalDataContextProvider, { PresentationContent } from "@app/contexts/global-data";
import Layout from "@app/components/Layout";
import Slide from "@app/components/Slides";

export interface IndexPageProps {
    content: Document[];
}

/**
 * The main page component
 */
export default function IndexPage(props: IndexPageProps): JSX.Element {
    const { locale } = useContext(LocalizationContext);
    const { setCount } = useContext(NavigationContext);
    const setCountRef = useRef<(x: number) => void>(setCount);
    const presentationContent: PresentationContent = useMemo(() => {
        const localizedContent = props.content?.find(x => x.lang === locale);
        return localizedContent?.data;
    }, [props.content, locale]);

    useEffect(() => {
        if (presentationContent && presentationContent.body.length > 0)
            setCountRef.current(presentationContent.body.length);
    }, [presentationContent]);

    if (!presentationContent)
        throw new Error("Couldn't load the main content. Check your configuration!");

    return (
        <GlobalDataContextProvider value={presentationContent}>
            <Head>
                {presentationContent.project_title.length > 0 && (
                    <title>{presentationContent.project_title[0].text}</title>
                )}

                <meta
                    name="description"
                    content={PrismicDOM.RichText.asText(presentationContent.project_description)}
                />
            </Head>

            <Layout>
                <Slide />
            </Layout>
        </GlobalDataContextProvider>
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
