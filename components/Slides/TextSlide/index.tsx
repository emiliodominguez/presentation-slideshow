import { TitleField, RTNode, ColorField, ImageField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide, { IBaseSlide } from "..";
import styles from "./TextSlide.module.scss";

export interface ITextSlde extends IBaseSlide {
    slide_title: TitleField;
    slide_content: RTNode;
    slide_bg_color: ColorField;
    slide_bg_image: ImageField;
}

interface TextSlideProps {
    content: ITextSlde;
}

/**
 * The text slide component
 */
export default function TextSlide(props: TextSlideProps): JSX.Element {
    const content = props.content.slide_content;
    const richTextContent = PrismicDOM.RichText.asHtml(content);

    return (
        <BaseSlide content={props.content} className={styles.textSlide}>
            <div className={styles.content}>
                <h2 style={{}}>{props.content.slide_title[0].text}</h2>
                <div dangerouslySetInnerHTML={{ __html: richTextContent }} />
            </div>
        </BaseSlide>
    );
}
