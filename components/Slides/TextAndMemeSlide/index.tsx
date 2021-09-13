import {
    TitleField,
    RTNode,
    ImageField,
    BooleanField,
    ColorField
} from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import { className } from "@app/shared/helpers/classname";
import { getContrastColor } from "@app/shared/helpers/colors";
import { BaseSlide } from "..";
import sharedStyles from "../Slides.module.scss";
import styles from "./TextAndMemeSlide.module.scss";

interface TextAndMemeSlide extends BaseSlide {
    meme_slide_title: TitleField;
    meme_slide_content: RTNode;
    meme_slide_meme: ImageField;
    meme_slide_left_aligned: BooleanField;
    meme_slide_bg_color: ColorField;
    meme_slide_bg_image: ImageField;
}

interface TextAndMemeSlideProps {
    content: TextAndMemeSlide;
}

/**
 * The text slide component
 */
export default function TextAndMemeSlide(
    props: TextAndMemeSlideProps
): JSX.Element {
    const content = props.content.meme_slide_content;
    const richTextContent = PrismicDOM.RichText.asHtml(content);

    return (
        <div
            {...className(sharedStyles.slide, styles.textAndMemeSlide)}
            style={{
                ["--slideBgColor" as string]: props.content.meme_slide_bg_color,
                ["--slideBgContrastColor" as string]:
                    props.content.meme_slide_bg_color &&
                    getContrastColor(props.content.meme_slide_bg_color),
                ["--slideBgImage" as string]:
                    !!props.content.meme_slide_bg_image.length &&
                    `url(${props.content.meme_slide_bg_image[0].url})`
            }}
        >
            <div className={styles.content}>
                <section className={styles.leftSide}>
                    <h2>{props.content.meme_slide_title[0].text}</h2>

                    <div
                        dangerouslySetInnerHTML={{ __html: richTextContent }}
                    />
                </section>

                <section className={styles.rightSide}>
                    <img
                        src={props.content.meme_slide_meme.url as string}
                        alt={props.content.meme_slide_meme.alt as string}
                    />
                </section>
            </div>
        </div>
    );
}
