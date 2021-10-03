import * as nextImage from "next/image";
import LocalizationContextProvider from "@app/contexts/localization";
import NavigationContextProvider from "@app/contexts/navigation";
import Layout from "@app/components/Layout";
import "@app/styles/main.scss";

/**
 * Replaces next image component by an img with the same props
 */
Object.defineProperty(nextImage, "default", {
    configurable: true,
    value: props => (
        <img widht={props.width} height={props.height} alt={props.alt} src={props.src} />
    )
});

export const decorators = [
    Story => (
        <LocalizationContextProvider>
            <NavigationContextProvider>
                <Layout>{Story()}</Layout>
            </NavigationContextProvider>
        </LocalizationContextProvider>
    )
];
