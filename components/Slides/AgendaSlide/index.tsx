import { TitleField, RichTextField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide, { IBaseSlide } from "..";
import LogoAndTitle from "@app/components/Shared/LogoAndTitle";
import styles from "./AgendaSlide.module.scss";

export interface IAgendaSlide extends IBaseSlide {
    slide_title: TitleField;
    slide_content: RichTextField;
}

interface AgendaSlideProps {
    content: IAgendaSlide;
}

/**
 * The agenda slide component
 */
export default function AgendaSlide(props: AgendaSlideProps): JSX.Element {
    const richTextContent = PrismicDOM.RichText.asHtml(props.content.slide_content);

    return (
        <BaseSlide content={props.content} className={styles.agendaSlide}>
            <div className={styles.content}>
                <LogoAndTitle title={props.content.slide_title[0].text} />

                <div
                    className="body-text-small"
                    dangerouslySetInnerHTML={{ __html: richTextContent }}
                />
            </div>
        </BaseSlide>
    );
}
