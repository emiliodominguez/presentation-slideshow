import { VFC } from "react";
import { Meta } from "@storybook/react";
import KeyFiguresSlide from "@app/components/Slides/KeyFiguresSlide";
import { KeyFiguresSlideProps } from "@app/components/Slides/KeyFiguresSlide/interfaces";

export default {
    component: KeyFiguresSlide,
    title: "Slides/KeyFiguresSlide",
    argTypes: {
        content: {
            description: "The slide content"
        }
    }
} as Meta;

const exampleData = (dark: boolean) => ({
    dark_theme_enabled: dark,
    slide_navigation_id: [
        {
            type: "heading4",
            text: "Key figures"
        }
    ],
    slide_title: [
        {
            type: "heading2",
            text: "Slide title"
        }
    ],
    slide_subtitle: [
        {
            type: "paragraph",
            text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s."
        }
    ],
    key_figures: [
        {
            key_figure_icon: {
                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
            },
            key_figure_value: [
                {
                    type: "paragraph",
                    text: "20%"
                }
            ],
            key_figure_title: [
                {
                    type: "heading3",
                    text: "Key figure 1"
                }
            ],
            key_figure_content: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        },
        {
            key_figure_icon: {
                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
            },
            key_figure_value: [
                {
                    type: "paragraph",
                    text: "200dpi"
                }
            ],
            key_figure_title: [
                {
                    type: "heading3",
                    text: "Key figure 2"
                }
            ],
            key_figure_content: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        },
        {
            key_figure_icon: {
                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
            },
            key_figure_value: [
                {
                    type: "paragraph",
                    text: "200%"
                }
            ],
            key_figure_title: [
                {
                    type: "heading3",
                    text: "Key figure 3"
                }
            ],
            key_figure_content: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        }
    ]
});

export const DarkThemeStory: VFC<KeyFiguresSlideProps> = () => (
    <KeyFiguresSlide content={exampleData(true) as any} />
);

export const LightThemeStory: VFC<KeyFiguresSlideProps> = () => (
    <KeyFiguresSlide content={exampleData(false) as any} />
);
