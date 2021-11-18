import { TitleField, ImageField, RichTextField } from "@prismicio/types";
import { ISlide } from "..";

interface Element {
    grid_item_thumbnail: ImageField;
    grid_item_title: TitleField;
    grid_item_content: RichTextField;
}

export interface IElementsSlide extends ISlide {
    elements: Element[];
}

export interface ElementsSlideProps {
    content: IElementsSlide;
}
