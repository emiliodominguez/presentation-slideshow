import { VFC } from "react";
import { Meta } from "@storybook/react";
import IndexPage, { IndexPageProps } from "@app/pages/index";
import { exampleData } from "./example-data";

export default {
    component: IndexPage,
    title: "Pages/IndexPage",
    argTypes: {
        content: {
            description: "The main page multilanguage content"
        }
    }
} as Meta;

export const DarkThemeStory: VFC<IndexPageProps> = () => (
    <IndexPage content={exampleData(true) as any} />
);

export const LightThemeStory: VFC<IndexPageProps> = () => (
    <IndexPage content={exampleData(false) as any} />
);
