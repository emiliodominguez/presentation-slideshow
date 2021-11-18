import { VFC } from "react";
import { Meta } from "@storybook/react";
import QuoteSlide from "@app/components/Slides/QuoteSlide";
import { QuoteSlideProps } from "@app/components/Slides/QuoteSlide/interfaces";

export default {
    component: QuoteSlide,
    title: "Slides/QuoteSlide",
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
            text: "Quote slide"
        }
    ],
    slide_thumbnail: {
        url: "/assets/logos/isologo_white.png"
    },
    slide_quote: [
        {
            type: "paragraph",
            text: "\"What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s.”"
        }
    ],
    slide_name: [
        {
            type: "heading3",
            text: "Lorem Ipsum"
        }
    ],
    slide_title: [
        {
            type: "paragraph",
            text: "Poet & Developer"
        }
    ],
    slide_email: [
        {
            type: "paragraph",
            text: "lorem_ipsum@mail.com"
        }
    ],
    slide_phone: [
        {
            type: "paragraph",
            text: "+15555555555"
        }
    ]
};

const exampleDataLight = {
    ...exampleData,
    dark_theme_enabled: false,
    slide_thumbnail: {
        url: "/assets/logos/isologo_black.png"
    }
};

export const DarkThemeStory: VFC<QuoteSlideProps> = () => (
    <QuoteSlide content={exampleData as any} />
);

export const LightThemeStory: VFC<QuoteSlideProps> = () => (
    <QuoteSlide content={exampleDataLight as any} />
);
