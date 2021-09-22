import Image from "next/image";
import { TitleField, ImageField, RichTextField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
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

interface ElementsSlideProps {
    content: IElementsSlide;
}

/**
 * The text slide component
 */
export default function ElementsSlide(props: ElementsSlideProps): JSX.Element {
    const iconsSize = Object.freeze({ width: 50, height: 50 });

    return (
        <BaseSlide content={props.content} className={styles.elementsSlide}>
            <div className={styles.content}>
                <section className={styles.elements}>
                    {props.content.elements.length > 0 &&
                        props.content.elements.map(x => (
                            <div className={styles.element} key={x.grid_item_title[0].text}>
                                <div
                                    className={styles.icon}
                                    style={{
                                        ["--icon-width" as string]: `${iconsSize.width}px`,
                                        ["--icon-height" as string]: `${iconsSize.height}px`
                                    }}
                                >
                                    <Image
                                        {...iconsSize}
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
