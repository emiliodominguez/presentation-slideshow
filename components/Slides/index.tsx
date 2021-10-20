import { PropsWithChildren, useRef, useEffect, useState } from "react";
import { BooleanField, ImageField, TitleField } from "@prismicio/types";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import { IIntroductionSlide } from "./IntroductionSlide";
import { IAgendaSlide } from "./AgendaSlide";
import { IChapterIntroSlide } from "./ChapterIntroSlide";
import { ITextSlide } from "./TextSlide";
import { ITextAndImageSlide } from "./TextAndImageSlide";
import { ICenteredTextSlide } from "./CenteredTextSlide";
import { ITeamSlide } from "./TeamSlide";
import { IElementsSlide } from "./ElementsSlide";
import { IQuoteSlide } from "./QuoteSlide";
import { IKeyFiguresSlide } from "./KeyFiguresSlide";
import { IChartSlide } from "./ChartSlide";
import Breadcrumbs from "../Shared/Breadcrumbs";
import styles from "./BaseSlide.module.scss";

export interface IBaseSlide {
    dark_theme_enabled: BooleanField;
    chapter_name: TitleField;
    slide_navigation_id: TitleField;
    slide_bg_pattern?: ImageField;
    client?: string;
    presentation_title?: string;
}

type SlideContent =
    | IIntroductionSlide
    | IAgendaSlide
    | IChapterIntroSlide
    | ITextSlide
    | ITextAndImageSlide
    | ICenteredTextSlide
    | ITeamSlide
    | IElementsSlide
    | IQuoteSlide
    | IKeyFiguresSlide
    | IChartSlide;

interface BaseSlideProps {
    content: SlideContent;
    className?: string;
    hideBreadcrumbs?: boolean;
}

/**
 * Base slide container
 */
export default function BaseSlide(props: PropsWithChildren<BaseSlideProps>): JSX.Element {
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
            ref={slideRef}
            {...className(styles.slide, props.className)}
            style={{
                ["--slide-alignment" as string]: hasOverflow ? "flex-start" : "center",
                ["--slide-bg-pattern" as string]: props.content.slide_bg_pattern?.url
                    ? `url(${props.content.slide_bg_pattern.url})`
                    : undefined
            }}
        >
            {!props.hideBreadcrumbs && (
                <Breadcrumbs
                    client={props.content.client}
                    presentationTitle={props.content.presentation_title}
                    chapterName={
                        props.content.chapter_name?.length > 0
                            ? props.content.chapter_name[0].text
                            : undefined
                    }
                />
            )}

            {props.children}
        </div>
    );
}
