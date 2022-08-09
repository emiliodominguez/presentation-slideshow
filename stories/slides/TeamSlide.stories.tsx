import { ComponentStory, ComponentMeta } from "@storybook/react";
import TeamSlide from "@app/components/Slides/TeamSlide";
import withDarkTheme from "../decorators/withDarkTheme";

export default {
    component: TeamSlide,
    title: "Slides/TeamSlide",
    argTypes: { content: { description: "The slide content" } }
} as ComponentMeta<typeof TeamSlide>;

const mockedData = (dark: boolean): any => ({
    slide_navigation_id: [{ type: "heading4", text: "Team" }],
    slide_title: [{ type: "heading2", text: "Team" }],
    team: [
        {
            team_member_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            team_member_name: [{ type: "heading3", text: "Team member 1" }],
            team_member_title: [{ type: "paragraph", text: "Project Manager" }],
            team_member_email: [{ type: "paragraph", text: "team_member_1@mail.com" }],
            team_member_phone: [{ type: "paragraph", text: "+544444444444" }]
        },
        {
            team_member_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            team_member_name: [{ type: "heading3", text: "Team member 2" }],
            team_member_title: [{ type: "paragraph", text: "Team Lead" }],
            team_member_email: [{ type: "paragraph", text: "team_member_2@mail.com" }],
            team_member_phone: [{ type: "paragraph", text: "+544444444444" }]
        },
        {
            team_member_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            team_member_name: [{ type: "heading3", text: "Team member 3" }],
            team_member_title: [{ type: "paragraph", text: "Developer" }],
            team_member_email: [{ type: "paragraph", text: "team_member_3@mail.com" }],
            team_member_phone: [{ type: "paragraph", text: "+544444444444" }]
        },
        {
            team_member_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            team_member_name: [{ type: "heading3", text: "Team member 4" }],
            team_member_title: [{ type: "paragraph", text: "Developer" }],
            team_member_email: [{ type: "paragraph", text: "team_member_4@mail.com" }],
            team_member_phone: [{ type: "paragraph", text: "+544444444444" }]
        },
        {
            team_member_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            team_member_name: [{ type: "heading3", text: "Team member 5" }],
            team_member_title: [{ type: "paragraph", text: "Developer" }],
            team_member_email: [{ type: "paragraph", text: "team_member_5@mail.com" }],
            team_member_phone: [{ type: "paragraph", text: "+544444444444" }]
        },
        {
            team_member_thumbnail: { url: `/assets/logos/isologo_${dark ? "white" : "black"}.png` },
            team_member_name: [{ type: "heading3", text: "Team member 6" }],
            team_member_title: [{ type: "paragraph", text: "Developer" }],
            team_member_email: [{ type: "paragraph", text: "team_member_5@mail.com" }],
            team_member_phone: [{ type: "paragraph", text: "+544444444444" }]
        }
    ]
});

const Template: ComponentStory<typeof TeamSlide> = args => <TeamSlide {...args} />;

export const LightThemeStory = Template.bind({});

LightThemeStory.args = {
    content: mockedData(false)
};

export const DarkThemeStory = Template.bind({});

DarkThemeStory.args = {
    content: mockedData(true)
};

DarkThemeStory.decorators = [withDarkTheme];
