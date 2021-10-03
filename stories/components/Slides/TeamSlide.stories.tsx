import { VFC } from "react";
import { Meta } from "@storybook/react";
import TeamSlide, { TeamSlideProps } from "@app/components/Slides/TeamSlide";

export default {
    component: TeamSlide,
    title: "Slides/TeamSlide",
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
            text: "Team"
        }
    ],
    slide_title: [
        {
            type: "heading2",
            text: "Team"
        }
    ],
    team: [
        {
            team_member_thumbnail: {
                url: "/assets/logos/isologo_white.png"
            },
            team_member_name: [
                {
                    type: "heading3",
                    text: "Team member 1"
                }
            ],
            team_member_title: [
                {
                    type: "paragraph",
                    text: "Project Manager"
                }
            ],
            team_member_email: [
                {
                    type: "paragraph",
                    text: "team_member_1@endava.com"
                }
            ],
            team_member_phone: [
                {
                    type: "paragraph",
                    text: "+544444444444"
                }
            ]
        },
        {
            team_member_thumbnail: {
                url: "/assets/logos/isologo_white.png"
            },
            team_member_name: [
                {
                    type: "heading3",
                    text: "Team member 2"
                }
            ],
            team_member_title: [
                {
                    type: "paragraph",
                    text: "Team Lead"
                }
            ],
            team_member_email: [
                {
                    type: "paragraph",
                    text: "team_member_2@endava.com"
                }
            ],
            team_member_phone: [
                {
                    type: "paragraph",
                    text: "+544444444444"
                }
            ]
        },
        {
            team_member_thumbnail: {
                url: "/assets/logos/isologo_white.png"
            },
            team_member_name: [
                {
                    type: "heading3",
                    text: "Team member 3"
                }
            ],
            team_member_title: [
                {
                    type: "paragraph",
                    text: "Developer"
                }
            ],
            team_member_email: [
                {
                    type: "paragraph",
                    text: "team_member_3@endava.com"
                }
            ],
            team_member_phone: [
                {
                    type: "paragraph",
                    text: "+544444444444"
                }
            ]
        },
        {
            team_member_thumbnail: {
                url: "/assets/logos/isologo_white.png"
            },
            team_member_name: [
                {
                    type: "heading3",
                    text: "Team member 4"
                }
            ],
            team_member_title: [
                {
                    type: "paragraph",
                    text: "Developer"
                }
            ],
            team_member_email: [
                {
                    type: "paragraph",
                    text: "team_member_4@endava.com"
                }
            ],
            team_member_phone: [
                {
                    type: "paragraph",
                    text: "+544444444444"
                }
            ]
        },
        {
            team_member_thumbnail: {
                url: "/assets/logos/isologo_white.png"
            },
            team_member_name: [
                {
                    type: "heading3",
                    text: "Team member 5"
                }
            ],
            team_member_title: [
                {
                    type: "paragraph",
                    text: "Developer"
                }
            ],
            team_member_email: [
                {
                    type: "paragraph",
                    text: "team_member_5@endava.com"
                }
            ],
            team_member_phone: [
                {
                    type: "paragraph",
                    text: "+544444444444"
                }
            ]
        },
        {
            team_member_thumbnail: {
                url: "/assets/logos/isologo_white.png"
            },
            team_member_name: [
                {
                    type: "heading3",
                    text: "Team member 6"
                }
            ],
            team_member_title: [
                {
                    type: "paragraph",
                    text: "Developer"
                }
            ],
            team_member_email: [
                {
                    type: "paragraph",
                    text: "team_member_5@endava.com"
                }
            ],
            team_member_phone: [
                {
                    type: "paragraph",
                    text: "+544444444444"
                }
            ]
        }
    ]
};

const exampleDataDark = { ...exampleData, dark_theme_enabled: false };

export const DarkThemeStory: VFC<TeamSlideProps> = () => <TeamSlide content={exampleData as any} />;

export const LightThemeStory: VFC<TeamSlideProps> = () => (
    <TeamSlide content={exampleDataDark as any} />
);
