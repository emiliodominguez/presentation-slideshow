import PrismicDOM from "prismic-dom";
import { TitleField, RichTextField, NumberField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "../BaseSlide";
import styles from "./ChapterIntroSlide.module.scss";

export interface IChapterIntroSlide extends IBaseSlide {
    slide_chapter_number: NumberField;
    slide_subtitle: RichTextField;
    slide_title: TitleField;
}

export interface ChapterIntroSlideProps {
    content: IChapterIntroSlide;
}

/**
 * The chapter intro slide component
 */
export default function ChapterIntroSlide(props: ChapterIntroSlideProps): JSX.Element {
    return (
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <div className={styles.chapterNumber}>
                    <span>{props.content.slide_chapter_number}</span>
                </div>

                <div
                    className="subtitle-small"
                    dangerouslySetInnerHTML={{
                        __html: PrismicDOM.RichText.asHtml(props.content.slide_subtitle)
                    }}
                />

                <h2 className="title">{props.content.slide_title[0].text}</h2>
            </div>
        </BaseSlide>
    );
}
