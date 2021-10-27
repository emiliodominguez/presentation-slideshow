import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { TitleField, NumberField, ImageField, RichTextField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "@app/components/Shared/BaseSlide";
import styles from "./KeyFiguresSlide.module.scss";

interface KeyFigure {
    key_figure_icon: ImageField;
    key_figure_value: NumberField;
    key_figure_title: TitleField;
    key_figure_content: RichTextField;
}

export interface IKeyFiguresSlide extends IBaseSlide {
    slide_title: TitleField;
    slide_subtitle: RichTextField;
    key_figures: KeyFigure[];
}

export interface KeyFiguresSlideProps {
    content: IKeyFiguresSlide;
}

/**
 * The key figures slide component
 */
export default function KeyFiguresSlide(props: KeyFiguresSlideProps): JSX.Element {
    return (
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

                    <div
                        className="body-text"
                        dangerouslySetInnerHTML={{
                            __html: PrismicDOM.RichText.asHtml(props.content.slide_subtitle)
                        }}
                    />
                </div>

                <section className={styles.keyFigures}>
                    {props.content.key_figures.length > 0 &&
                        props.content.key_figures.map(x => (
                            <div className={styles.keyFigure} key={x.key_figure_title[0].text}>
                                <div className={styles.icon}>
                                    <Image
                                        width={70}
                                        height={70}
                                        objectFit="contain"
                                        src={x.key_figure_icon.url!}
                                        alt={x.key_figure_icon.alt!}
                                    />
                                </div>

                                <div
                                    className="title"
                                    dangerouslySetInnerHTML={{
                                        __html: PrismicDOM.RichText.asText(x.key_figure_value)
                                    }}
                                />

                                <h3 className="subtitle">{x.key_figure_title[0].text}</h3>

                                <div
                                    className="body-text"
                                    dangerouslySetInnerHTML={{
                                        __html: PrismicDOM.RichText.asHtml(x.key_figure_content)
                                    }}
                                />
                            </div>
                        ))}
                </section>
            </div>
        </BaseSlide>
    );
}
