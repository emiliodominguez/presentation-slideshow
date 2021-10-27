import { TitleField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "../../Shared/BaseSlide";
import styles from "./CenteredTextSlide.module.scss";

export interface ICenteredTextSlide extends IBaseSlide {
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
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <h2 className="title-medium">{props.content.slide_title[0].text}</h2>
                <h4 className="subtitle-small">{props.content.slide_subtitle[0].text}</h4>
            </div>
        </BaseSlide>
    );
}
