import { useContext } from "react";
import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { TitleField, RichTextField, ImageField, BooleanField } from "@prismicio/types";
import { GlobalDataContext } from "@app/pages";
import BaseSlide, { IBaseSlide } from "../../Shared/BaseSlide";
import styles from "./IntroductionSlide.module.scss";

export interface IIntroductionSlide extends IBaseSlide {
    slide_logo: ImageField;
    slide_title: TitleField;
    slide_description: RichTextField;
    show_small_company_logo: BooleanField;
}

export interface IntroductionSlideProps {
    content: IIntroductionSlide;
}

/**
 * The introduction slide component
 */
export default function IntroductionSlide(props: IntroductionSlideProps): JSX.Element {
    const { logo_dark, logo_light } = useContext(GlobalDataContext);
    const darkTheme = props.content.dark_theme_enabled;

    /**
     * Sets the logo based on the theme
     * @returns - The logo URL
     */
    function setLogo(): string {
        if (darkTheme) return logo_dark?.url ?? "/assets/logos/logo_dark.png";
        else return logo_light?.url ?? "/assets/logos/logo_light.png";
    }

    /**
     * Sets the logo's alt text based on the theme
     * @returns - The logo alt text
     */
    function setAlt(): string {
        if (logo_dark?.alt) return logo_dark?.alt;
        if (logo_light?.alt) return logo_light?.alt;
        return "";
    }

    return (
        <BaseSlide content={props.content}>
            <div className={styles.content}>
                <div className={styles.mainLogo}>
                    <Image
                        width={275}
                        height={150}
                        objectFit="contain"
                        alt={props.content.slide_logo.alt ?? setAlt()}
                        src={props.content.slide_logo.url ?? setLogo()}
                    />
                </div>

                <div className={styles.textContainer}>
                    <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

                    <div
                        className="subtitle-small"
                        dangerouslySetInnerHTML={{
                            __html: PrismicDOM.RichText.asHtml(props.content.slide_description)
                        }}
                    />
                </div>

                {props.content.show_small_company_logo && (
                    <div className={styles.companyLogo}>
                        <Image
                            width={150}
                            height={50}
                            objectFit="contain"
                            src={setLogo()}
                            alt="Logo"
                        />
                    </div>
                )}
            </div>
        </BaseSlide>
    );
}
