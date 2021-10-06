import { VFC } from "react";
import { Meta } from "@storybook/react";
import AgendaSlide, { AgendaSlideProps } from "@app/components/Slides/AgendaSlide";

export default {
    component: AgendaSlide,
    title: "Slides/AgendaSlide",
    argTypes: {
        content: {
            description: "The slide content"
        }
    }
} as Meta;

const exampleData = {
    dark_theme_enabled: true,
    slide_navigation_id: [
        {
            type: "heading4",
            text: "Agenda"
        }
    ],
    slide_title: [
        {
            type: "heading2",
            text: "Agenda"
        }
    ],
    slide_content: [
        {
            type: "o-list-item",
            text: "Chapter 1"
        },
        {
            type: "o-list-item",
            text: "Chapter 2"
        },
        {
            type: "o-list-item",
            text: "Chapter 3"
        },
        {
            type: "o-list-item",
            text: "Chapter 4"
        },
        {
            type: "o-list-item",
            text: "Chapter 5"
        }
    ]
};

const exampleDataLight = { ...exampleData, dark_theme_enabled: false };

export const DarkThemeStory: VFC<AgendaSlideProps> = () => (
    <AgendaSlide content={exampleData as any} />
);

export const LightThemeStory: VFC<AgendaSlideProps> = () => (
    <AgendaSlide content={exampleDataLight as any} />
);
