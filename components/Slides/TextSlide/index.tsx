import { TitleField, RTNode, ImageField, BooleanField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide from "..";
import styles from "./TextSlide.module.scss";

export interface ITextSlide {
    dark_theme_enabled: BooleanField;
    slide_navigation_id: TitleField;
    slide_title: TitleField;
    slide_content: RTNode;
    slide_bg_pattern: ImageField;
}

interface TextSlideProps {
    content: ITextSlide;
}

/**
 * The text slide component
 */
export default function TextSlide(props: TextSlideProps): JSX.Element {
    const richTextContent = PrismicDOM.RichText.asHtml(
        props.content.slide_content
    );

    return (
        <BaseSlide content={props.content} className={styles.textSlide}>
            <div className={styles.content}>
                <h2 className="title">{props.content.slide_title[0].text}</h2>
                <div
                    className="body-text"
                    dangerouslySetInnerHTML={{ __html: richTextContent }}
                />
            </div>
        </BaseSlide>
    );
}
