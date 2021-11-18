import { CenteredTextSlideProps } from "./inderfaces";
import styles from "./CenteredTextSlide.module.scss";

/**
 * The chapter intro slide component
 */
export default function CenteredTextSlide(props: CenteredTextSlideProps): JSX.Element {
    return (
        <div className={styles.content}>
            <h2 className="title-medium">{props.content.slide_title[0].text}</h2>
            <h4 className="subtitle-small">{props.content.slide_subtitle[0].text}</h4>
        </div>
    );
}
