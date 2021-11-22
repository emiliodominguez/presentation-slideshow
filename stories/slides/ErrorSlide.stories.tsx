import { VFC } from "react";
import { Meta } from "@storybook/react";
import ErrorSlide from "@app/components/Slides/ErrorSlide";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: ErrorSlide,
    title: "Slides/ErrorSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

export const LightErrorSlideStory: VFC<{}> = ErrorSlide;

export const DarkErrorSlideStory: VFC<{}> = () => {
    useDarkTheme();
    return <ErrorSlide />;
};
