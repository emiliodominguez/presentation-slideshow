import { TitleField, RichTextField } from "@prismicio/types";
import { ISlide } from "..";

interface TextBlock {
    slide_content: RichTextField;
}

export interface ITextSlide extends ISlide {
    slide_title: TitleField;
    text_blocks: TextBlock[];
}

export interface TextSlideProps {
    content: ITextSlide;
}
