import { VFC } from "react";
import { Meta } from "@storybook/react";
import ChapterIntroSlide from "@app/components/Slides/ChapterIntroSlide";
import { ChapterIntroSlideProps } from "@app/components/Slides/ChapterIntroSlide/interfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: ChapterIntroSlide,
    title: "Slides/ChapterIntroSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData: any = {
    slide_navigation_id: [{ type: "heading4", text: "Chapter 1" }],
    slide_chapter_number: 1,
    slide_subtitle: [{ type: "paragraph", text: "The chapter 1 subheader" }],
    slide_title: [{ type: "heading2", text: "The chapter 1 title" }]
};

export const LightThemeStory: VFC<ChapterIntroSlideProps> = () => (
    <ChapterIntroSlide content={exampleData} />
);

export const DarkThemeStory: VFC<ChapterIntroSlideProps> = () => {
    useDarkTheme();
    return <ChapterIntroSlide content={exampleData} />;
};
