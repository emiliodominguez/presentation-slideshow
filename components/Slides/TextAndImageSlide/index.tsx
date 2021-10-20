import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { TitleField, RichTextField, BooleanField, ImageField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "..";
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
    /**
     * Parses the image URL and removes the Prismic auto format parameter
     * This prevents the Image component not playing animated GIFs
     * @param url - The image URL
     * @returns The image URL without the auto format parameter
     */
    function parseUrl(url: string): string {
        const splittedUrl = url.split("?");
        return splittedUrl[0];
    }

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

                    <div className={styles.image}>
                        <Image
                            key={props.content.slide_image.url!}
                            width={550}
                            height={250}
                            objectFit="contain"
                            src={parseUrl(props.content.slide_image.url!)}
                            alt={props.content.slide_image.alt!}
                        />
                    </div>
                </div>
            </div>
        </BaseSlide>
    );
}
