import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChapterIntroSlide from "@app/components/Slides/ChapterIntroSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: ChapterIntroSlide,
    title: "Slides/ChapterIntroSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof ChapterIntroSlide>;

const mockedData: any = {
    slide_chapter_number: 1,
    slide_navigation_id: [{ type: "heading4", text: "Chapter 1" }],
    slide_subtitle: [{ type: "paragraph", text: "The chapter 1 subheader" }],
    slide_title: [{ type: "heading2", text: "The chapter 1 title" }]
};

const Template: ComponentStory<typeof ChapterIntroSlide> = () => (
    <ChapterIntroSlide content={mockedData} />
);

export const LightThemeStory = Template.bind({});

export const DarkThemeStory = Template.bind({});

DarkThemeStory.decorators = [withDarkTheme];
