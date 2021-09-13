import { TitleField, RTNode, ColorField, ImageField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import { className } from "@app/shared/helpers/classname";
import { getContrastColor } from "@app/shared/helpers/colors";
import { BaseSlide } from "..";
import sharedStyles from "../Slides.module.scss";
import styles from "./TextSlide.module.scss";

export interface TextSlde extends BaseSlide {
    text_slide_title: TitleField;
    text_slide_content: RTNode;
    text_slide_bg_color: ColorField;
    text_slide_bg_image: ImageField;
}

interface TextSlideProps {
    content: TextSlde;
}

/**
 * The text slide component
 */
export default function TextSlide(props: TextSlideProps): JSX.Element {
    const content = props.content.text_slide_content;
    const richTextContent = PrismicDOM.RichText.asHtml(content);

    return (
        <div
            {...className(sharedStyles.slide, styles.textSlide)}
            style={{
                ["--slideBgColor" as string]: props.content.text_slide_bg_color,
                ["--slideBgContrastColor" as string]:
                    props.content.text_slide_bg_color &&
                    getContrastColor(props.content.text_slide_bg_color),
                ["--slideBgImage" as string]:
                    !!props.content.text_slide_bg_image.length &&
                    `url(${props.content.text_slide_bg_image[0].url})`
            }}
        >
            <div className={styles.content}>
                <h2>{props.content.text_slide_title[0].text}</h2>
                <div dangerouslySetInnerHTML={{ __html: richTextContent }} />
            </div>
        </div>
    );
}
