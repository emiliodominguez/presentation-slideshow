import { VFC } from "react";
import { Meta } from "@storybook/react";
import CenteredTextSlide from "@app/components/Slides/CenteredTextSlide";
import { CenteredTextSlideProps } from "@app/components/Slides/CenteredTextSlide/inderfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: CenteredTextSlide,
    title: "Slides/CenteredTextSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData: any = {
    slide_navigation_id: [{ type: "heading4", text: "Centered text slide" }],
    slide_title: [{ type: "heading2", text: "Some title" }],
    slide_subtitle: [{ type: "paragraph", text: "Some subtitle" }]
};

export const LightThemeStory: VFC<CenteredTextSlideProps> = () => (
    <CenteredTextSlide content={exampleData} />
);

export const DarkThemeStory: VFC<CenteredTextSlideProps> = () => {
    useDarkTheme();
    return <CenteredTextSlide content={exampleData} />;
};
