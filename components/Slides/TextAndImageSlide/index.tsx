import PrismicDOM from "prismic-dom";
import { TitleField, RichTextField, BooleanField, ImageField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "../BaseSlide";
import { className } from "@app/shared/helpers/classname";
import styles from "./TextAndImageSlide.module.scss";

export interface ITextAndImageSlide extends IBaseSlide {
    slide_title: TitleField;
    slide_image: ImageField;
    slide_image_right_aligned: BooleanField;
    slide_content: RichTextField;
}

export interface TextAndImageSlideProps {
    content: ITextAndImageSlide;
}

/**
 * The text slide component
 */
export default function TextAndImageSlide(props: TextAndImageSlideProps): JSX.Element {
    return (
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

                <div
                    {...className(styles.textAndImage, {
                        [styles.imageToLeft]: !props.content.slide_image_right_aligned
                    })}
                >
                    <div
                        className="body-text"
                        dangerouslySetInnerHTML={{
                            __html: PrismicDOM.RichText.asHtml(props.content.slide_content)
                        }}
                    />

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        key={props.content.slide_image.url!}
                        src={props.content.slide_image.url!}
                        alt={props.content.slide_image.alt!}
                    />
                </div>
            </div>
        </BaseSlide>
    );
}
