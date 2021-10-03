import { VFC } from "react";
import { Meta } from "@storybook/react";
import LogoAndTitle, { LogoAndTitleProps } from "@app/components/Shared/LogoAndTitle";

export default {
    component: LogoAndTitle,
    title: "Components/Shared/LogoAndTitle",
    argTypes: {
        title: {
            description: "The section title"
        }
    }
} as Meta;

export const LogoAndTitleStory: VFC<LogoAndTitleProps> = () => (
    <LogoAndTitle title="Lorem ipsum dolor sit amet" />
);
