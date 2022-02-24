import { TitleField, RichTextField, ImageField } from "@prismicio/types";
import { ISlide } from "..";

export interface IQuoteSlide extends ISlide {
    slide_thumbnail: ImageField;
    slide_quote: RichTextField;
    slide_name: TitleField<"filled">;
    slide_title: RichTextField;
    slide_email: RichTextField;
    slide_phone: RichTextField;
}

export interface QuoteSlideProps {
    content: IQuoteSlide;
}
