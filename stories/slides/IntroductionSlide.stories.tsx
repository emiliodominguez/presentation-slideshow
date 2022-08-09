import { ComponentStory, ComponentMeta } from "@storybook/react";
import IntroductionSlide from "@app/components/Slides/IntroductionSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: IntroductionSlide,
    title: "Slides/IntroductionSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof IntroductionSlide>;

const mockedData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Intro" }],
    slide_logo: { url: `/assets/logos/logo_${dark ? "dark" : "light"}.png` },
    slide_title: [{ type: "heading2", text: "The name of the presentation" }],
    slide_description: [{ type: "paragraph", text: "A brief description of the talk's topic" }]
});

const Template: ComponentStory<typeof IntroductionSlide> = args => <IntroductionSlide {...args} />;

export const LightThemeStory = Template.bind({});

LightThemeStory.args = {
    content: mockedData(false)
};

export const DarkThemeStory = Template.bind({});

DarkThemeStory.args = {
    content: mockedData(true)
};

DarkThemeStory.decorators = [withDarkTheme];
