import React, { useContext, useRef, useEffect, useMemo } from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import PrismicDOM from "prismic-dom";
import { client } from "@app/config/prismic";
import { Document } from "@prismicio/client/types/documents";
import { LocalizationContext } from "@app/contexts/localization";
import { NavigationContext } from "@app/contexts/navigation";
import GlobalDataContextProvider, { PresentationContent } from "@app/contexts/global-data";
import LanguageSelector from "@app/components/LanguageSelector";
import Navigation from "@app/components/Navigation";
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
        return (
            <h2 className="no-content-message">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                        fillRule="nonzero"
                    />
                </svg>
                {"Either there's a configuration issue or no slides were uploaded..."}
            </h2>
        );

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

            <main>
                <LanguageSelector />
                <Navigation />
                <Slide />
            </main>
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
