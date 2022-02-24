import { ISlide } from "..";
import { TitleField, ImageField, RichTextField } from "@prismicio/types";
interface Element {
    grid_item_thumbnail: ImageField;
    grid_item_title: TitleField<"filled">;
    grid_item_content: RichTextField;
}

export interface IElementsAltSlide extends ISlide {
    elements: Element[];
}

export interface ElementsAltSlideProps {
    content: IElementsAltSlide;
}
