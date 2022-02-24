import { RichTextField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface IYouTubeSlide extends ISlide {
    slide_title: TitleField<"filled">;
    slide_description: RichTextField;
    youtube_id: TitleField<"filled">;
}

export interface YouTubeSlideProps {
    content: IYouTubeSlide;
}
