import { ColorField, NumberField, RichTextField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

interface ChartItem {
    item_label: TitleField;
    item_description: RichTextField;
    item_percentage: NumberField;
    item_color: ColorField;
}

export interface IChartSlide extends ISlide {
    slide_title: TitleField;
    slide_description: RichTextField;
    chart_items: ChartItem[];
}

export interface ChartSlideProps {
    content: IChartSlide;
}
