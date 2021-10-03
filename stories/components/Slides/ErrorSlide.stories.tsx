import { VFC } from "react";
import { Meta } from "@storybook/react";
import ErrorSlide from "@app/components/Slides/ErrorSlide";

export default {
    component: ErrorSlide,
    title: "Slides/ErrorSlide",
    argTypes: {
        content: {
            description: "The slide content"
        }
    }
} as Meta;

export const ErrorSlideStory: VFC<{}> = () => <ErrorSlide />;
