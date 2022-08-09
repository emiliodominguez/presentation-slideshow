import PrismicDOM from "prismic-dom";
import LogoAndTitle from "@app/components/Shared/LogoAndTitle";
import { AgendaSlideProps } from "./AgendaSlide.model";
import styles from "./AgendaSlide.module.scss";

/**
 * The agenda slide component
 */
export default function AgendaSlide(props: AgendaSlideProps): JSX.Element {
    return (
        <div className={styles.content}>
            <iframe src="https://css-tricks.com/" frameBorder="0"></iframe>
        </div>
    );
}
