import { VFC } from "react";
import { Meta } from "@storybook/react";
import ChapterIntroSlide, {
    ChapterIntroSlideProps
} from "@app/components/Slides/ChapterIntroSlide";

export default {
    component: ChapterIntroSlide,
    title: "Slides/ChapterIntroSlide",
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
            text: "Chapter 1"
        }
    ],
    slide_chapter_number: 1,
    slide_subtitle: [
        {
            type: "paragraph",
            text: "The chapter 1 subheader"
        }
    ],
    slide_title: [
        {
            type: "heading2",
            text: "The chapter 1 title"
        }
    ]
};

const exampleDataDark = { ...exampleData, dark_theme_enabled: false };

export const DarkThemeStory: VFC<ChapterIntroSlideProps> = () => (
    <ChapterIntroSlide content={exampleData as any} />
);

export const LightThemeStory: VFC<ChapterIntroSlideProps> = () => (
    <ChapterIntroSlide content={exampleDataDark as any} />
);
