import { TitleField, ImageField, RichTextField } from "@prismicio/types";
import { ISlide } from "..";

interface TeamMember {
    team_member_thumbnail: ImageField;
    team_member_name: TitleField<"filled">;
    team_member_title: RichTextField;
    team_member_phone: RichTextField;
    team_member_email: RichTextField;
}

export interface ITeamSlide extends ISlide {
    slide_title: TitleField<"filled">;
    team: TeamMember[];
}

export interface TeamSlideProps {
    content: ITeamSlide;
}
