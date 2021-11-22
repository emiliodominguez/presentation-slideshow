import { VFC } from "react";
import { Meta } from "@storybook/react";
import TextSlide from "@app/components/Slides/TextSlide";
import { TextSlideProps } from "@app/components/Slides/TextSlide/interfaces";
import useDarkTheme from "../hooks/useDarkTheme";

export default {
    component: TextSlide,
    title: "Slides/TextSlide",
    argTypes: { content: { description: "The slide content" } }
} as Meta;

const exampleData: any = {
    slide_navigation_id: [{ type: "heading4", text: "Text slide" }],
    slide_title: [{ type: "heading2", text: "Lorem ipsum dolor" }],
    text_blocks: [
        {
            slide_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. Also, people love to highlight text. We should show them how. dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled."
                },
                { type: "paragraph", text: "" },
                { type: "heading3", text: "Bullet examples" },
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
                { type: "list-item", text: "This is an example of bulleted text. " },
                { type: "list-item", text: "This is another bullet example. " },
                { type: "list-item", text: "And here’s a third." },
                { type: "list-item", text: "Finally, we have a fourth.\n" },
                { type: "heading3", text: "Numeric Lists" },
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
                { type: "o-list-item", text: "This is an example of bulleted text. " },
                { type: "o-list-item", text: "This is another bullet example. " }
            ]
        }
    ]
};

export const LightThemeStory: VFC<TextSlideProps> = () => <TextSlide content={exampleData} />;

export const DarkThemeStory: VFC<TextSlideProps> = () => {
    useDarkTheme();
    return <TextSlide content={exampleData} />;
};
