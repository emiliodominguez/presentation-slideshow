import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { TitleField, ImageField, RichTextField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "..";
import styles from "./ElementsSlide.module.scss";

interface Element {
    grid_item_thumbnail: ImageField;
    grid_item_title: TitleField;
    grid_item_content: RichTextField;
}

export interface IElementsSlide extends IBaseSlide {
    elements: Element[];
}

export interface ElementsSlideProps {
    content: IElementsSlide;
}

/**
 * The elements slide component
 */
export default function ElementsSlide(props: ElementsSlideProps): JSX.Element {
    return (
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <section className={styles.elements}>
                    {props.content.elements.length > 0 &&
                        props.content.elements.map(x => (
                            <div className={styles.element} key={x.grid_item_title[0].text}>
                                <div className={styles.icon}>
                                    <Image
                                        width={50}
                                        height={50}
                                        objectFit="contain"
                                        src={x.grid_item_thumbnail.url!}
                                        alt={x.grid_item_thumbnail.alt!}
                                    />
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
        </BaseSlide>
    );
}
