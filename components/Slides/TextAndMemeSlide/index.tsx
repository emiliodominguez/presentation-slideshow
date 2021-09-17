import {
    TitleField,
    RTNode,
    ImageField,
    BooleanField,
    ColorField
} from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import Image from "next/image";
import BaseSlide, { IBaseSlide } from "..";
import styles from "./TextAndMemeSlide.module.scss";

export interface ITextAndMemeSlide extends IBaseSlide {
    slide_title: TitleField;
    slide_content: RTNode;
    slide_meme: ImageField;
    slide_left_aligned: BooleanField;
    slide_bg_color: ColorField;
    slide_bg_image: ImageField;
}

interface TextAndMemeSlideProps {
    content: ITextAndMemeSlide;
}

/**
 * The text slide component
 */
export default function TextAndMemeSlide(
    props: TextAndMemeSlideProps
): JSX.Element {
    const richTextContent = PrismicDOM.RichText.asHtml(
        props.content.slide_content
    );

    return (
        <BaseSlide content={props.content} className={styles.textAndMemeSlide}>
            <div className={styles.content}>
                <section className={styles.leftSide}>
                    <h2>{props.content.slide_title[0].text}</h2>

                    <div
                        dangerouslySetInnerHTML={{ __html: richTextContent }}
                    />
                </section>

                <section className={styles.rightSide}>
                    {props.content.slide_meme && (
                        <Image
                            width={640}
                            height={480}
                            src={props.content.slide_meme.url!}
                            alt={props.content.slide_meme.alt!}
                        />
                    )}
                </section>
            </div>
        </BaseSlide>
    );
}
