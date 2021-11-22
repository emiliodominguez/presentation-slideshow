import { TitleField, RichTextField, ImageField, BooleanField } from "@prismicio/types";
import { ISlide } from "..";

export interface IIntroductionSlide extends ISlide {
    slide_logo: ImageField;
    slide_title: TitleField<"filled">;
    slide_description: RichTextField;
    show_small_company_logo: BooleanField;
}

export interface IntroductionSlideProps {
    content: IIntroductionSlide;
}
