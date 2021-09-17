import { PropsWithChildren } from "react";
import { TitleField } from "@prismicio/types";
import { className } from "@app/shared/helpers/classname";
import { getContrastColor } from "@app/shared/helpers/colors";
import { ITextSlde } from "./TextSlide";
import { ITextAndMemeSlide } from "./TextAndMemeSlide";
import styles from "./BaseSlide.module.scss";

export interface IBaseSlide {
    slide_navigation_id: TitleField;
}

interface BaseSlideProps {
    content: ITextSlde | ITextAndMemeSlide;
    className?: string;
}

/**
 * Base slide container
 */
export default function BaseSlide(
    props: PropsWithChildren<BaseSlideProps>
): JSX.Element {
    return (
        <div
            {...className(styles.slide, props.className)}
            style={{
                ["--slideBgColor" as string]: props.content.slide_bg_color,
                ["--slideBgContrastColor" as string]:
                    props.content.slide_bg_color &&
                    getContrastColor(props.content.slide_bg_color ?? ""),
                ["--slideBgImage" as string]:
                    props.content.slide_bg_image?.url &&
                    `url(${props.content.slide_bg_image.url})`
            }}
        >
            {props.children}
        </div>
    );
}
