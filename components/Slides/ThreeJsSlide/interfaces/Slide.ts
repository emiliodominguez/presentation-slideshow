import { RichTextField, TitleField } from "@prismicio/types";
import { ISlide } from "../..";

export interface IThreeJsSlide extends ISlide {
    slide_title: TitleField<"filled">;
    slide_excerpt: RichTextField;
}

export interface ThreeJsSlideProps {
    content: IThreeJsSlide;
}
