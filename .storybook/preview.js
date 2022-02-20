import * as NextImage from "next/image";
import LocalizationContextProvider from "@app/contexts/localization";
import NavigationContextProvider from "@app/contexts/navigation";
import GlobalDataContextProvider from "@app/contexts/global-data";
import BaseSlide from "@app/components/Shared/BaseSlide";
import "@app/styles/main.scss";

/**
 * Replaces next image component by an img with the same props
 */
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: props => <OriginalNextImage {...props} unoptimized />
});

const mockedData = {
    project_title: "Storybook demo",
    project_description: "This is a placeholder text for Storybook",
    body: [{ slice_type: "text_slide", primary: { slide_navigation_id: [{ text: "Demo slide" }] } }]
};

export const decorators = [
    Story => (
        <LocalizationContextProvider>
            <NavigationContextProvider>
                <GlobalDataContextProvider value={mockedData}>
                    <main>
                        <BaseSlide>
                            <Story />
                        </BaseSlide>
                    </main>
                </GlobalDataContextProvider>
            </NavigationContextProvider>
        </LocalizationContextProvider>
    )
];
