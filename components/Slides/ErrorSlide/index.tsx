import BaseSlide from "../../Shared/BaseSlide";
import styles from "./ErrorSlide.module.scss";

interface ErrorSlideProps {
    message?: string;
}

/**
 * The error slide component
 */
export default function ErrorSlide(props: ErrorSlideProps): JSX.Element {
    return (
        <BaseSlide content={{} as any}>
            <div className={styles.content}>
                <h2 className="title">...oops!</h2>
                <h3 className="subtitle-small">
                    {props.message ?? "There was an error setting the slide"}
                </h3>
            </div>
        </BaseSlide>
    );
}
