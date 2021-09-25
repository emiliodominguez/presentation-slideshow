import { PropsWithChildren, useRef, useEffect, useContext } from "react";
import { BooleanField, ImageField, TitleField } from "@prismicio/types";
import { NavigationContext } from "@app/contexts/navigation";
import { className } from "@app/shared/helpers/classname";
import { IIntroductionSlide } from "./IntroductionSlide";
import { IAgendaSlide } from "./AgendaSlide";
import { IChapterIntroSlide } from "./ChapterIntroSlide";
import { ITeamSlide } from "./TeamSlide";
import { IElementsSlide } from "./ElementsSlide";
import { IQuoteSlide } from "./QuoteSlide";
import styles from "./BaseSlide.module.scss";

export interface IBaseSlide {
    dark_theme_enabled: BooleanField;
    slide_navigation_id: TitleField;
    slide_bg_pattern: ImageField;
}

interface BaseSlideProps {
    content:
        | IIntroductionSlide
        | IAgendaSlide
        | IChapterIntroSlide
        | ITeamSlide
        | IElementsSlide
        | IQuoteSlide;
    className?: string;
}

type CustomPropertiesSetup = { [key: string]: string };

/**
 * Base slide container
 */
export default function BaseSlide(props: PropsWithChildren<BaseSlideProps>): JSX.Element {
    const { currentIndex } = useContext(NavigationContext);
    const slideRef = useRef<HTMLDivElement | null>(null);

    /**
     * Sets the custom properties values if there's any
     * @returns The custom properties setup
     */
    function setBackgroundPattern(): CustomPropertiesSetup | undefined {
        if (!props.content.slide_bg_pattern?.url) return undefined;

        return {
            ["--slide-bg-pattern"]: `url(${props.content.slide_bg_pattern.url})`
        };
    }

    useEffect(() => {
        if (props.content.dark_theme_enabled) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [props.content]);

    return (
        <div
            key={`slide_${currentIndex}`}
            ref={slideRef}
            style={setBackgroundPattern()}
            {...className(styles.slide, props.className)}
        >
            {props.children}
        </div>
    );
}
