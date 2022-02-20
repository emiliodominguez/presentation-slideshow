import { ComponentStory, ComponentMeta } from "@storybook/react";
import KeyFiguresSlide from "@app/components/Slides/KeyFiguresSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: KeyFiguresSlide,
    title: "Slides/KeyFiguresSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof KeyFiguresSlide>;

const mockedData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Key figures" }],
    slide_title: [{ type: "heading2", text: "Slide title" }],
    slide_subtitle: [
        {
            type: "paragraph",
            text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s."
        }
    ],
    key_figures: [
        {
            key_figure_icon: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            key_figure_value: [{ type: "paragraph", text: "20%" }],
            key_figure_title: [{ type: "heading3", text: "Key figure 1" }],
            key_figure_content: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        },
        {
            key_figure_icon: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            key_figure_value: [{ type: "paragraph", text: "200dpi" }],
            key_figure_title: [{ type: "heading3", text: "Key figure 2" }],
            key_figure_content: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        },
        {
            key_figure_icon: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            key_figure_value: [{ type: "paragraph", text: "200%" }],
            key_figure_title: [{ type: "heading3", text: "Key figure 3" }],
            key_figure_content: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        }
    ]
});

const Template: ComponentStory<typeof KeyFiguresSlide> = args => <KeyFiguresSlide {...args} />;

export const LightThemeStory = Template.bind({});

LightThemeStory.args = {
    content: mockedData(false)
};

export const DarkThemeStory = Template.bind({});

DarkThemeStory.args = {
    content: mockedData(true)
};

DarkThemeStory.decorators = [withDarkTheme];
