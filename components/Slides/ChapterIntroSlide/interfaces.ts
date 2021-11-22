import { NumberField, RichTextField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface IChapterIntroSlide extends ISlide {
    slide_chapter_number: NumberField;
    slide_subtitle: RichTextField;
    slide_title: TitleField<"filled">;
}

export interface ChapterIntroSlideProps {
    content: IChapterIntroSlide;
}
