import { TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface ICenteredTextSlide extends ISlide {
    slide_title: TitleField;
    slide_subtitle: TitleField;
}

export interface CenteredTextSlideProps {
    content: ICenteredTextSlide;
}
