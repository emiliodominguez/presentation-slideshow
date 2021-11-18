import { TitleField, RichTextField, BooleanField, ImageField } from "@prismicio/types";
import { ISlide } from "..";

export interface ITextAndImageSlide extends ISlide {
    slide_title: TitleField;
    slide_image: ImageField;
    slide_image_right_aligned: BooleanField;
    slide_content: RichTextField;
}

export interface TextAndImageSlideProps {
    content: ITextAndImageSlide;
}
