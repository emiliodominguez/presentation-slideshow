import { VFC } from "react";
import { Meta } from "@storybook/react";
import { TitleField } from "@prismicio/types";
import Breadcrumbs, { BreadcrumbsProps } from "@app/components/Shared/Breadcrumbs";

export default {
    component: Breadcrumbs,
    title: "Components/Shared/Breadcrumbs",
    argTypes: {
        chapterName: {
            description: "The chapter's name"
        }
    }
} as Meta;

const exampleData = {
    chapterName: [
        {
            type: "heading1",
            text: "Chapter name"
        }
    ]
};

export const BreadcrumbsStory: VFC<BreadcrumbsProps> = () => (
    <Breadcrumbs chapterName={exampleData.chapterName as TitleField} />
);
