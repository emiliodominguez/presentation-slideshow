import { ComponentStory, ComponentMeta } from "@storybook/react";
import ErrorSlide from "@app/components/Slides/ErrorSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: ErrorSlide,
    title: "Slides/ErrorSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof ErrorSlide>;

const Template: ComponentStory<typeof ErrorSlide> = () => <ErrorSlide />;

export const LightThemeStory = Template.bind({});

export const DarkThemeStory = Template.bind({});

DarkThemeStory.decorators = [withDarkTheme];
