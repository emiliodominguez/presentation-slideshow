import { ImageField, NumberField, RichTextField, SelectField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

interface Location {
    location_picture: ImageField;
    location_name: TitleField<"filled">;
    location_description: RichTextField;
    location_latitude: NumberField;
    location_longitude: NumberField;
}

export interface IMapSlide extends ISlide {
    slide_map: SelectField;
    locations: Location[];
}

export interface MapSlideProps {
    content: IMapSlide;
}
