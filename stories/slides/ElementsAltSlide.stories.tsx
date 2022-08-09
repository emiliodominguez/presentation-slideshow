import { ComponentStory, ComponentMeta } from "@storybook/react";
import ElementsAltSlide from "@app/components/Slides/ElementsAltSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: ElementsAltSlide,
    title: "Slides/ElementsAltSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof ElementsAltSlide>;

const mockedData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Elements grid alternative" }],
    elements: [
        {
            grid_item_thumbnail: { url: `/assets/logos/isologo_${dark ? "black" : "white"}.png` },
            grid_item_title: [{ type: "heading3", text: "Element 1" }],
            grid_item_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard."
                }
            ]
        },
        {
            grid_item_thumbnail: { url: `/assets/logos/isologo_${dark ? "black" : "white"}.png` },
            grid_item_title: [{ type: "heading3", text: "Element 2" }],
            grid_item_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard."
                }
            ]
        },
        {
            grid_item_thumbnail: { url: `/assets/logos/isologo_${dark ? "black" : "white"}.png` },
            grid_item_title: [{ type: "heading3", text: "Element 3" }],
            grid_item_content: [
                {
                    type: "paragraph",
                    text: "What is simply dummy text of the printing and typesetting industry has been the industry's standard."
                }
            ]
        }
    ]
});

const Template: ComponentStory<typeof ElementsAltSlide> = args => <ElementsAltSlide {...args} />;

export const LightThemeStory = Template.bind({});

LightThemeStory.args = {
    content: mockedData(false)
};

export const DarkThemeStory = Template.bind({});

DarkThemeStory.args = {
    content: mockedData(true)
};

DarkThemeStory.decorators = [withDarkTheme];
