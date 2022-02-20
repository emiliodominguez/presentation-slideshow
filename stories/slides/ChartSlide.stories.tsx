import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChartSlide from "@app/components/Slides/ChartSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: ChartSlide,
    title: "Slides/ChartSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof ChartSlide>;

const mockedData: any = {
    dark_theme_enabled: true,
    slide_title: [{ type: "heading2", text: "Lorem ipsum" }],
    slide_description: [{ type: "paragraph", text: "Lorem ipsum dolor sit amet" }],
    chart_items: [
        {
            item_label: [{ type: "heading6", text: "Data 1" }],
            item_description: [{ type: "paragraph", text: "Lorem ipsum dolor sit amet" }],
            item_percentage: 40,
            item_color: "#de411b"
        },
        {
            item_label: [{ type: "heading6", text: "Data 2" }],
            item_description: [],
            item_percentage: 5,
            item_color: "#48545b"
        },
        {
            item_label: [{ type: "heading6", text: "Date 3" }],
            item_description: [{ type: "paragraph", text: "Lorem ipsum dolor sit amet?" }],
            item_percentage: 40,
            item_color: "#72526c"
        },
        {
            item_label: [{ type: "heading6", text: "Data 4" }],
            item_description: [{ type: "paragraph", text: "Lorem ipsum dolor sit amet?" }],
            item_percentage: 15,
            item_color: "#8cb55a"
        }
    ]
};

const Template: ComponentStory<typeof ChartSlide> = () => <ChartSlide content={mockedData} />;

export const LightThemeStory = Template.bind({});

export const DarkThemeStory = Template.bind({});

DarkThemeStory.decorators = [withDarkTheme];
