/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AgendaSlide from "@app/components/Slides/AgendaSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: AgendaSlide,
    title: "Slides/AgendaSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof AgendaSlide>;

const mockedData: any = {
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

const Template: ComponentStory<typeof AgendaSlide> = () => <AgendaSlide content={mockedData} />;

export const LightThemeStory = Template.bind({});

export const DarkThemeStory = Template.bind({});

DarkThemeStory.decorators = [withDarkTheme];
