import { VFC } from "react";
import { Meta } from "@storybook/react";
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

export const BreadcrumbsStory: VFC<BreadcrumbsProps> = () => (
    <Breadcrumbs
        client="Client name"
        presentationTitle="Presentation title"
        chapterName="Chapter name"
    />
);
