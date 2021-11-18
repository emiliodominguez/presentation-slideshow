import PrismicDOM from "prismic-dom";
import LogoAndTitle from "@app/components/Shared/LogoAndTitle";
import { AgendaSlideProps } from "./interfaces";
import styles from "./AgendaSlide.module.scss";

/**
 * The agenda slide component
 */
export default function AgendaSlide(props: AgendaSlideProps): JSX.Element {
    return (
        <div className={styles.content}>
            <LogoAndTitle title={props.content.slide_title[0].text} />

            <div
                className="body-text-small"
                dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(props.content.slide_content)
                }}
            />
        </div>
    );
}
