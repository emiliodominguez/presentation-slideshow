import { VFC } from "react";
import { Meta } from "@storybook/react";
import { TitleField } from "@prismicio/types";
import Breadcrumbs, { BreadcrumbsProps } from "@app/components/Shared/Breadcrumbs";

export default {
    component: Breadcrumbs,
    title: "Components/Shared/Breadcrumbs",
    argTypes: {
        client: {
            description: "The client's name"
        },
        presentationTitle: {
            description: "The presentation's title"
        },
        chapterName: {
            description: "The chapter's name"
        }
    }
} as Meta;

const exampleData = {
    client: [
        {
            type: "heading1",
            text: "Client name"
        }
    ],
    presentationTitle: [
        {
            type: "heading1",
            text: "Presentation title"
        }
    ],
    chapterName: [
        {
            type: "heading1",
            text: "Chapter name"
        }
    ]
};

export const BreadcrumbsStory: VFC<BreadcrumbsProps> = () => (
    <Breadcrumbs
        client={exampleData.client as TitleField}
        presentationTitle={exampleData.presentationTitle as TitleField}
        chapterName={exampleData.chapterName as TitleField}
    />
);
