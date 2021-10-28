import PrismicDOM from "prismic-dom";
import { TitleField, RichTextField } from "@prismicio/types";
import { ISlide } from "..";
import BaseSlide from "@app/components/Shared/BaseSlide";
import LogoAndTitle from "@app/components/Shared/LogoAndTitle";
import styles from "./AgendaSlide.module.scss";

export interface IAgendaSlide extends ISlide {
    slide_title: TitleField;
    slide_content: RichTextField;
}

export interface AgendaSlideProps {
    content: IAgendaSlide;
}

/**
 * The agenda slide component
 */
export default function AgendaSlide(props: AgendaSlideProps): JSX.Element {
    return (
        <BaseSlide>
            <div className={styles.content}>
                <LogoAndTitle title={props.content.slide_title[0].text} />

                <div
                    className="body-text-small"
                    dangerouslySetInnerHTML={{
                        __html: PrismicDOM.RichText.asHtml(props.content.slide_content)
                    }}
                />
            </div>
        </BaseSlide>
    );
}
