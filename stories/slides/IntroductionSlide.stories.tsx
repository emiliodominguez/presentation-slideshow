import { VFC } from "react";
import { Meta } from "@storybook/react";
import IntroductionSlide from "@app/components/Slides/IntroductionSlide";
import { IntroductionSlideProps } from "@app/components/Slides/IntroductionSlide/interfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: IntroductionSlide,
    title: "Slides/IntroductionSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Intro" }],
    slide_logo: { url: `/assets/logos/logo_${dark ? "dark" : "light"}.png` },
    slide_title: [{ type: "heading2", text: "The name of the presentation" }],
    slide_description: [{ type: "paragraph", text: "A brief description of the talk's topic" }]
});

export const LightThemeStory: VFC<IntroductionSlideProps> = () => (
    <IntroductionSlide content={exampleData(false)} />
);

export const DarkThemeStory: VFC<IntroductionSlideProps> = () => {
    useDarkTheme();
    return <IntroductionSlide content={exampleData(true)} />;
};
