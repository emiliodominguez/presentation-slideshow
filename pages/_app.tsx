import React from "react";
import { AppProps } from "next/app";
import LocalizationContextProvider from "@app/contexts/localization";
import useRealViewportHeight from "@app/hooks/useRealViewportHeight";
import "../styles/main.scss";

/**
 * App component
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useRealViewportHeight();

    return (
        <LocalizationContextProvider>
            <Component {...pageProps} />
        </LocalizationContextProvider>
    );
}
