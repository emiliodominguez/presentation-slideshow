import { PropsWithChildren, useRef, useEffect, useContext, useState } from "react";
import { BooleanField, ImageField, TitleField } from "@prismicio/types";
import { NavigationContext } from "@app/contexts/navigation";
import useEventListener from "@app/hooks/useEventListener";
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

type SlideContent =
    | IIntroductionSlide
    | IAgendaSlide
    | IChapterIntroSlide
    | ITeamSlide
    | IElementsSlide
    | IQuoteSlide;

interface BaseSlideProps {
    content: SlideContent;
    className?: string;
}

/**
 * Base slide container
 */
export default function BaseSlide(props: PropsWithChildren<BaseSlideProps>): JSX.Element {
    const { currentIndex } = useContext(NavigationContext);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const resizeTimeoutRef = useRef<number | undefined>(undefined);
    const [hasOverflow, setHasOverflow] = useState<boolean>(false);

    /**
     * Sets the custom properties values if there's any
     * @returns The custom properties setup
     */
    function setBackgroundPattern(): { [key: string]: string } | undefined {
        if (!props.content.slide_bg_pattern?.url) return undefined;

        return {
            ["--slide-bg-pattern"]: `url(${props.content.slide_bg_pattern.url})`
        };
    }

    /**
     * Checks if the slide is overflowing
     */
    function checkOverflow(): void {
        clearTimeout(resizeTimeoutRef.current);

        resizeTimeoutRef.current = window.setTimeout(() => {
            if (!slideRef.current) return;

            const { scrollHeight, clientHeight } = slideRef.current;
            setHasOverflow(scrollHeight > clientHeight);
        }, 250);
    }

    useEffect(() => {
        checkOverflow();

        if (props.content.dark_theme_enabled) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }

        return () => clearTimeout(resizeTimeoutRef.current);
    }, [props.content]);

    useEventListener("resize", checkOverflow);

    return (
        <div
            key={`slide_${currentIndex}`}
            ref={slideRef}
            {...className(styles.slide, props.className)}
            style={{
                ...setBackgroundPattern(),
                ["--slide-alignment" as string]: hasOverflow ? "flex-start" : "center"
            }}
        >
            {props.children}
        </div>
    );
}
