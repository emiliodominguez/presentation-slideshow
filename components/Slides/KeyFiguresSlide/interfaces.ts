import { TitleField, NumberField, ImageField, RichTextField } from "@prismicio/types";
import { ISlide } from "..";

interface KeyFigure {
    key_figure_icon: ImageField;
    key_figure_value: NumberField;
    key_figure_title: TitleField;
    key_figure_content: RichTextField;
}

export interface IKeyFiguresSlide extends ISlide {
    slide_title: TitleField;
    slide_subtitle: RichTextField;
    key_figures: KeyFigure[];
}

export interface KeyFiguresSlideProps {
    content: IKeyFiguresSlide;
}
