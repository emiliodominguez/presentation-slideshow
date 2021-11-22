import { TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface ICenteredTextSlide extends ISlide {
    slide_title: TitleField<"filled">;
    slide_subtitle: TitleField<"filled">;
}

export interface CenteredTextSlideProps {
    content: ICenteredTextSlide;
}
