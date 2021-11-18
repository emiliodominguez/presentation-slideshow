import PrismicDOM from "prismic-dom";
import { ChapterIntroSlideProps } from "./interfaces";
import styles from "./ChapterIntroSlide.module.scss";

/**
 * The chapter intro slide component
 */
export default function ChapterIntroSlide(props: ChapterIntroSlideProps): JSX.Element {
    return (
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
    );
}
