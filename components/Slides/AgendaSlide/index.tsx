import Image from "next/image";
import {
    TitleField,
    RichTextField,
    ImageField,
    BooleanField
} from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide from "..";
import styles from "./AgendaSlide.module.scss";

export interface IAgendaSlide {
    dark_theme_enabled: BooleanField;
    slide_navigation_id: TitleField;
    slide_title: TitleField;
    slide_content: RichTextField;
    slide_bg_pattern: ImageField;
}

interface AgendaSlideProps {
    content: IAgendaSlide;
}

/**
 * The agenda slide component
 */
export default function AgendaSlide(props: AgendaSlideProps): JSX.Element {
    const richTextContent = PrismicDOM.RichText.asHtml(
        props.content.slide_content
    );

    return (
        <BaseSlide content={props.content} className={styles.agendaSlide}>
            <div className={styles.content}>
                <Image
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/images/logo/isologo_orange.png"
                    alt="Endava isologo"
                />

                <h2 className="title-medium">
                    {props.content.slide_title[0].text}
                </h2>

                <div
                    className="body-text-small"
                    dangerouslySetInnerHTML={{ __html: richTextContent }}
                />
            </div>
        </BaseSlide>
    );
}
