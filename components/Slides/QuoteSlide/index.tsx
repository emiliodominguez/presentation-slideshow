import Image from "next/image";
import { TitleField, RichTextField, ImageField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide, { IBaseSlide } from "..";
import styles from "./QuoteSlide.module.scss";

export interface IQuoteSlide extends IBaseSlide {
    slide_thumbnail: ImageField;
    slide_quote: RichTextField;
    slide_name: TitleField;
    slide_title: RichTextField;
    slide_email: RichTextField;
    slide_phone: RichTextField;
}

interface QuoteSlideProps {
    content: IQuoteSlide;
}

/**
 * The quote slide component
 */
export default function QuoteSlide(props: QuoteSlideProps): JSX.Element {
    const email = PrismicDOM.RichText.asText(props.content.slide_email);

    return (
        <BaseSlide content={props.content} className={styles.quoteSlide}>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <Image
                        width={125}
                        height={125}
                        src={props.content.slide_thumbnail.url!}
                        alt={props.content.slide_thumbnail.alt!}
                    />

                    <h3>{props.content.slide_name[0].text}</h3>
                    <p className="subtitle-small">
                        {PrismicDOM.RichText.asText(props.content.slide_title)}
                    </p>
                </div>

                <span className={styles.separator} />

                <div className={styles.rightSide}>
                    <div
                        className={styles.quote}
                        dangerouslySetInnerHTML={{
                            __html: PrismicDOM.RichText.asHtml(props.content.slide_quote)
                        }}
                    />

                    <a href={`mailto:${email}`} className={styles.email}>
                        {email}
                    </a>

                    <span className={styles.phone}>
                        {PrismicDOM.RichText.asText(props.content.slide_phone)}
                    </span>
                </div>
            </div>
        </BaseSlide>
    );
}
