import { VFC } from "react";
import { Meta } from "@storybook/react";
import IntroductionSlide from "@app/components/Slides/IntroductionSlide";
import { IntroductionSlideProps } from "@app/components/Slides/IntroductionSlide/interfaces";

export default {
    component: IntroductionSlide,
    title: "Slides/IntroductionSlide",
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
            text: "Intro"
        }
    ],
    slide_logo: {
        url: "/assets/logos/logo_dark.png"
    },
    slide_title: [
        {
            type: "heading2",
            text: "The name of the presentation"
        }
    ],
    slide_description: [
        {
            type: "paragraph",
            text: "A brief description of the talk's topic"
        }
    ]
};

const exampleDataLight = {
    ...exampleData,
    dark_theme_enabled: false,
    slide_logo: {
        url: "/assets/logos/logo_light.png"
    }
};

export const DarkThemeStory: VFC<IntroductionSlideProps> = () => (
    <IntroductionSlide content={exampleData as any} />
);

export const LightThemeStory: VFC<IntroductionSlideProps> = () => (
    <IntroductionSlide content={exampleDataLight as any} />
);
