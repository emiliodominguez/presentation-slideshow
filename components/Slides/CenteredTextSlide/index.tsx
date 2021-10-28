import { TitleField } from "@prismicio/types";
import { ISlide } from "..";
import BaseSlide from "@app/components/Shared/BaseSlide";
import styles from "./CenteredTextSlide.module.scss";

export interface ICenteredTextSlide extends ISlide {
    slide_title: TitleField;
    slide_subtitle: TitleField;
}

export interface CenteredTextSlideProps {
    content: ICenteredTextSlide;
}

/**
 * The chapter intro slide component
 */
export default function CenteredTextSlide(props: CenteredTextSlideProps): JSX.Element {
    return (
        <BaseSlide>
            <div className={styles.content}>
                <h2 className="title-medium">{props.content.slide_title[0].text}</h2>
                <h4 className="subtitle-small">{props.content.slide_subtitle[0].text}</h4>
            </div>
        </BaseSlide>
    );
}
