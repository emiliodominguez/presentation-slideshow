import { ComponentStory, ComponentMeta } from "@storybook/react";
import QuoteSlide from "@app/components/Slides/QuoteSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: QuoteSlide,
    title: "Slides/QuoteSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof QuoteSlide>;

const mockedData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Quote slide" }],
    slide_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
    slide_quote: [
        {
            type: "paragraph",
            text: "\"What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. What is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s.”"
        }
    ],
    slide_name: [{ type: "heading3", text: "Lorem Ipsum" }],
    slide_title: [{ type: "paragraph", text: "Poet & Developer" }],
    slide_email: [{ type: "paragraph", text: "lorem_ipsum@mail.com" }],
    slide_phone: [{ type: "paragraph", text: "+15555555555" }]
});

const Template: ComponentStory<typeof QuoteSlide> = args => <QuoteSlide {...args} />;

export const LightThemeStory = Template.bind({});

LightThemeStory.args = {
    content: mockedData(false)
};

export const DarkThemeStory = Template.bind({});

DarkThemeStory.args = {
    content: mockedData(true)
};

DarkThemeStory.decorators = [withDarkTheme];
