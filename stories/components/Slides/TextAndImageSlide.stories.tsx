import { VFC } from "react";
import { Meta } from "@storybook/react";
import TextAndImageSlide, {
    TextAndImageSlideProps
} from "@app/components/Slides/TextAndImageSlide";

export default {
    component: TextAndImageSlide,
    title: "Slides/TextAndImageSlide",
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
            text: "Test slide"
        }
    ],
    slide_title: [
        {
            type: "heading2",
            text: "Lorem ipsum dolor"
        }
    ],
    slide_content: [
        {
            type: "paragraph",
            text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. Also, people love to highlight text. We should show them how. dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled.",
            spans: [
                {
                    start: 232,
                    end: 293,
                    type: "strong"
                },
                {
                    start: 289,
                    end: 292,
                    type: "hyperlink",
                    data: {
                        link_type: "Web",
                        url: "https://google.com",
                        target: "_blank"
                    }
                }
            ]
        },
        {
            type: "paragraph",
            text: ""
        },
        {
            type: "heading3",
            text: "Bullet examples",
            spans: [
                {
                    start: 0,
                    end: 15,
                    type: "strong"
                }
            ]
        },
        {
            type: "paragraph",
            text: "It would also help if we provided a few examples of bullets:"
        },
        {
            type: "list-item",
            text: "You can see that bullets have “after paragraph” spacing set to 5."
        },
        {
            type: "list-item",
            text: "Whereas body text and headings have “after paragraph” spacing of 20."
        },
        {
            type: "list-item",
            text: "This is an example of bulleted text. "
        },
        {
            type: "list-item",
            text: "This is another bullet example. "
        },
        {
            type: "list-item",
            text: "And here’s a third."
        },
        {
            type: "list-item",
            text: "Finally, we have a fourth.\n"
        },
        {
            type: "heading3",
            text: "Numeric Lists",
            spans: [
                {
                    start: 0,
                    end: 13,
                    type: "strong"
                }
            ]
        },
        {
            type: "paragraph",
            text: "It would also help if we provided a few examples of bullets:"
        },
        {
            type: "o-list-item",
            text: "You can see that bullets have “after paragraph” spacing set to 10."
        },
        {
            type: "o-list-item",
            text: "Whereas body text and headings have “after paragraph” spacing of 20."
        },
        {
            type: "o-list-item",
            text: "This is an example of bulleted text. "
        },
        {
            type: "o-list-item",
            text: "This is another bullet example. "
        }
    ],
    slide_image: {
        url: `/assets/logos/logo_${dark ? "dark" : "light"}.png`
    },
    slide_image_right_aligned: true
});

export const DarkThemeStoryImageToTheRight: VFC<TextAndImageSlideProps> = () => (
    <TextAndImageSlide content={exampleData(true) as any} />
);

export const LightThemeStoryImageToTheRight: VFC<TextAndImageSlideProps> = () => (
    <TextAndImageSlide content={exampleData(false) as any} />
);

export const DarkThemeStoryImageToTheLeft: VFC<TextAndImageSlideProps> = () => (
    <TextAndImageSlide
        content={{ ...exampleData(true), slide_image_right_aligned: false } as any}
    />
);

export const LightThemeStoryImageToTheLeft: VFC<TextAndImageSlideProps> = () => (
    <TextAndImageSlide
        content={{ ...exampleData(false), slide_image_right_aligned: false } as any}
    />
);
