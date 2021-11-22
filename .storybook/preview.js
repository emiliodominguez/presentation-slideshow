import * as nextImage from "next/image";
import LocalizationContextProvider from "@app/contexts/localization";
import NavigationContextProvider from "@app/contexts/navigation";
import GlobalDataContextProvider from "@app/contexts/global-data";
import Layout from "@app/components/Layout";
import BaseSlide from "@app/components/Shared/BaseSlide";
import "@app/styles/main.scss";

/**
 * Replaces next image component by an img with the same props
 */
Object.defineProperty(nextImage, "default", {
    configurable: true,
    value: props => <img {...props} />
});

const mockData = {
    project_title: "Storybook demo",
    project_description: "This is a placeholder text for Storybook",
    body: [
        {
            slice_type: "text_slide",
            primary: { slide_navigation_id: [{ text: "Demo slide" }] }
        }
    ]
};

export const decorators = [
    Story => (
        <LocalizationContextProvider>
            <NavigationContextProvider>
                <GlobalDataContextProvider value={mockData}>
                    <Layout>
                        <BaseSlide>{Story()}</BaseSlide>
                    </Layout>
                </GlobalDataContextProvider>
            </NavigationContextProvider>
        </LocalizationContextProvider>
    )
];
