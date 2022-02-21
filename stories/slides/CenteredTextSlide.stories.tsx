import { ComponentStory, ComponentMeta } from "@storybook/react";
import CenteredTextSlide from "@app/components/Slides/CenteredTextSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: CenteredTextSlide,
    title: "Slides/CenteredTextSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof CenteredTextSlide>;

const mockedData: any = {
    slide_navigation_id: [{ type: "heading4", text: "Centered text slide" }],
    slide_title: [{ type: "heading2", text: "Some title" }],
    slide_subtitle: [{ type: "paragraph", text: "Some subtitle" }]
};

const Template: ComponentStory<typeof CenteredTextSlide> = () => <CenteredTextSlide content={mockedData} />;

export const LightThemeStory = Template.bind({});

export const DarkThemeStory = Template.bind({});

DarkThemeStory.decorators = [withDarkTheme];
