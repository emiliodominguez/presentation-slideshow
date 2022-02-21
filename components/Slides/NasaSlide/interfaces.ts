import { RichTextField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface INasaSlide extends ISlide {
    slide_title: TitleField<"filled">;
    slide_description: RichTextField;
}

export interface NasaSlideProps {
    content: INasaSlide;
}
