import { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import EdgeBox from "@app/components/Shared/EdgeBox";

export default {
    component: EdgeBox,
    title: "Components/Shared/EdgeBox",
    argTypes: {
        boxPosition: {
            description: "The box position"
        },
        startHidden: {
            description: "A boolean that determines whether the box should start hidden or not"
        },
        keyShortcut: {
            description: "A key shortcut to toggle the box's visibility"
        }
    }
} as Meta;

const Template: Story<ComponentProps<typeof EdgeBox>> = props => {
    const style = {
        width: 100,
        height: 100,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#222",
        color: "#fff"
    };

    return (
        <EdgeBox {...props}>
            <div {...{ style }} />
        </EdgeBox>
    );
};

export const TopStory = Template.bind({});
TopStory.args = { boxPosition: "top" };

export const BottomStory = Template.bind({});
BottomStory.args = { boxPosition: "bottom" };

export const LeftStory = Template.bind({});
LeftStory.args = { boxPosition: "left" };

export const RightStory = Template.bind({});
RightStory.args = { boxPosition: "right" };
