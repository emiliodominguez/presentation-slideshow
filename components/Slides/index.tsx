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
import { IKeyFiguresSlide } from "./KeyFiguresSlide";
import { ITextSlide } from "./TextSlide";
import { IChartSlide } from "./ChartSlide";
import styles from "./BaseSlide.module.scss";

export interface IBaseSlide {
    dark_theme_enabled: BooleanField;
    slide_navigation_id: TitleField;
    slide_bg_pattern?: ImageField;
}

type SlideContent =
    | IIntroductionSlide
    | IAgendaSlide
    | IChapterIntroSlide
    | ITeamSlide
    | IElementsSlide
    | IQuoteSlide
    | IKeyFiguresSlide
    | ITextSlide
    | IChartSlide;

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

        // Sets the dark theme modifier based on the slide configuration
        const action = props.content.dark_theme_enabled ? "add" : "remove";
        document.body.classList[action]("dark-theme");

        return () => clearTimeout(resizeTimeoutRef.current);
    }, [props.content]);

    useEventListener("resize", checkOverflow);

    return (
        <div
            key={`slide_${currentIndex}`}
            ref={slideRef}
            {...className(styles.slide, props.className)}
            style={{
                ["--slide-alignment" as string]: hasOverflow ? "flex-start" : "center",
                ["--slide-bg-pattern" as string]: props.content.slide_bg_pattern?.url
                    ? `url(${props.content.slide_bg_pattern.url})`
                    : undefined
            }}
        >
            {props.children}
        </div>
    );
}
