import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { KeyFiguresSlideProps } from "./interfaces";
import styles from "./KeyFiguresSlide.module.scss";

/**
 * The key figures slide component
 */
export default function KeyFiguresSlide(props: KeyFiguresSlideProps): JSX.Element {
    return (
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
                                <Image width={70} height={70} objectFit="contain" src={x.key_figure_icon.url!} alt={x.key_figure_icon.alt!} />
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
    );
}
