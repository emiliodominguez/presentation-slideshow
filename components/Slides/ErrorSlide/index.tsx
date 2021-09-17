import BaseSlide from "..";
import styles from "./ErrorSlide.module.scss";

interface ErrorSlideProps {
    message?: string;
}

/**
 * The error slide component
 */
export default function ErrorSlide(props: ErrorSlideProps): JSX.Element {
    return (
        <BaseSlide content={{} as any} className={styles.errorSlide}>
            <h3>{props.message ?? "There was an error setting the slide"}</h3>
        </BaseSlide>
    );
}
