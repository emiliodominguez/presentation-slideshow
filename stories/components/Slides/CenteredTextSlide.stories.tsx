import { VFC } from "react";
import { Meta } from "@storybook/react";
import CenteredTextSlide from "@app/components/Slides/CenteredTextSlide";
import { CenteredTextSlideProps } from "@app/components/Slides/CenteredTextSlide/inderfaces";

export default {
    component: CenteredTextSlide,
    title: "Slides/CenteredTextSlide",
    argTypes: {
        content: {
            description: "The slide content"
        }
    }
} as Meta;

const exampleData = {
    dark_theme_enabled: true,
    slide_navigation_id: [
        {
            type: "heading4",
            text: "Centered text slide"
        }
    ],
    slide_title: [
        {
            type: "heading2",
            text: "Some title"
        }
    ],
    slide_subtitle: [
        {
            type: "paragraph",
            text: "Some subtitle"
        }
    ]
};

const exampleDataLight = { ...exampleData, dark_theme_enabled: false };

export const DarkThemeStory: VFC<CenteredTextSlideProps> = () => (
    <CenteredTextSlide content={exampleData as any} />
);

export const LightThemeStory: VFC<CenteredTextSlideProps> = () => (
    <CenteredTextSlide content={exampleDataLight as any} />
);
