import { className } from "@app/shared/helpers/classname";
import sharedStyles from "../Slides.module.scss";
import styles from "./ErrorSlide.module.scss";

interface ErrorSlideProps {
    message?: string;
}

/**
 * The error slide component
 */
export default function ErrorSlide(props: ErrorSlideProps): JSX.Element {
    return (
        <div {...className(sharedStyles.slide, styles.errorSlide)}>
            <h3>{props.message ?? "There was an error setting the slide"}</h3>
        </div>
    );
}
