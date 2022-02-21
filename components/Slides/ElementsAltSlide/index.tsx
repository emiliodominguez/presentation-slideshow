import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { ElementsAltSlideProps } from "./interfaces";
import styles from "./ElementsAltSlide.module.scss";

/**
 * The elements slide component
 */
export default function ElementsAltSlide(props: ElementsAltSlideProps): JSX.Element {
    return (
        <div className={styles.content}>
            <section className={styles.elements}>
                {props.content.elements.length > 0 &&
                    props.content.elements.map(x => (
                        <div className={styles.element} key={x.grid_item_title[0].text}>
                            <div className={styles.icon}>
                                <Image width={50} height={50} objectFit="contain" src={x.grid_item_thumbnail.url!} alt={x.grid_item_thumbnail.alt!} />
                            </div>

                            <h3 className="subtitle">{x.grid_item_title[0].text}</h3>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: PrismicDOM.RichText.asHtml(x.grid_item_content)
                                }}
                            />
                        </div>
                    ))}
            </section>
        </div>
    );
}
