import { VFC } from "react";
import { Meta } from "@storybook/react";
import AgendaSlide from "@app/components/Slides/AgendaSlide";
import { AgendaSlideProps } from "@app/components/Slides/AgendaSlide/interfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: AgendaSlide,
    title: "Slides/AgendaSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData: any = {
    slide_navigation_id: [{ type: "heading4", text: "Agenda" }],
    slide_title: [{ type: "heading2", text: "Agenda" }],
    slide_content: [
        { type: "o-list-item", text: "Chapter 1" },
        { type: "o-list-item", text: "Chapter 2" },
        { type: "o-list-item", text: "Chapter 3" },
        { type: "o-list-item", text: "Chapter 4" },
        { type: "o-list-item", text: "Chapter 5" }
    ]
};

export const LightThemeStory: VFC<AgendaSlideProps> = () => <AgendaSlide content={exampleData} />;

export const DarkThemeStory: VFC<AgendaSlideProps> = () => {
    useDarkTheme();
    return <AgendaSlide content={exampleData} />;
};
