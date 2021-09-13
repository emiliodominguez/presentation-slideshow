import { TitleField } from "@prismicio/types";
import TextSlide from "./TextSlide";
import TextAndMemeSlide from "./TextAndMemeSlide";
import ErrorSlide from "./ErrorSlide";

export interface BaseSlide {
    slide_navigation_id: TitleField;
}

export { TextSlide, TextAndMemeSlide, ErrorSlide };
