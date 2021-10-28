import { VFC } from "react";
import { Meta } from "@storybook/react";
import Breadcrumbs from "@app/components/Shared/Breadcrumbs";

export default {
    component: Breadcrumbs,
    title: "Components/Shared/Breadcrumbs",
    argTypes: {
        chapterName: {
            description: "The chapter's name"
        }
    }
} as Meta;

export const BreadcrumbsStory: VFC<{}> = () => <Breadcrumbs />;
