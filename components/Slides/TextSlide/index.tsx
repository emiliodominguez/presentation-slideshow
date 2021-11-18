import PrismicDOM from "prismic-dom";
import { TextSlideProps } from "./interfaces";
import styles from "./TextSlide.module.scss";

/**
 * The text slide component
 */
export default function TextSlide(props: TextSlideProps): JSX.Element {
    return (
        <div className={styles.content}>
            <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

            <section className={styles.textBlocks}>
                {props.content.text_blocks.length > 0 &&
                    props.content.text_blocks.map((x, i) => (
                        <div
                            key={`text_block_${i}`}
                            className="body-text"
                            dangerouslySetInnerHTML={{
                                __html: PrismicDOM.RichText.asHtml(x.slide_content)
                            }}
                        />
                    ))}
            </section>
        </div>
    );
}
