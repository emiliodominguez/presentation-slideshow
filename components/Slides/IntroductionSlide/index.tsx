import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { TitleField, RichTextField, ImageField } from "@prismicio/types";
import BaseSlide, { IBaseSlide } from "..";
import styles from "./IntroductionSlide.module.scss";

export interface IIntroductionSlide extends IBaseSlide {
    slide_logo: ImageField;
    slide_title: TitleField;
    slide_description: RichTextField;
}

interface IntroductionSlideProps {
    content: IIntroductionSlide;
}

/**
 * The introduction slide component
 */
export default function IntroductionSlide(props: IntroductionSlideProps): JSX.Element {
    const darkTheme = props.content.dark_theme_enabled;
    const slideDescription = PrismicDOM.RichText.asHtml(props.content.slide_description);

    return (
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <div className={styles.mainLogo}>
                    <Image
                        width={275}
                        height={150}
                        objectFit="contain"
                        src={props.content.slide_logo.url!}
                        alt={props.content.slide_logo.alt!}
                    />
                </div>

                <div className={styles.textContainer}>
                    <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

                    <div
                        className="subtitle-small"
                        dangerouslySetInnerHTML={{ __html: slideDescription }}
                    />
                </div>

                <div className={styles.companyLogo}>
                    <Image
                        width={150}
                        height={50}
                        objectFit="contain"
                        src={`/assets/logos/logo_${darkTheme ? "dark" : "light"}.png`}
                        alt="Endava logo"
                    />
                </div>
            </div>
        </BaseSlide>
    );
}
