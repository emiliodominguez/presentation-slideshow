import React, { PropsWithChildren, useRef, useEffect, useState } from "react";
import { BooleanField, ImageField, Slice, TitleField } from "@prismicio/types";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import IntroductionSlide, { IIntroductionSlide } from "./IntroductionSlide";
import AgendaSlide, { IAgendaSlide } from "./AgendaSlide";
import ChapterIntroSlide, { IChapterIntroSlide } from "./ChapterIntroSlide";
import TextSlide, { ITextSlide } from "./TextSlide";
import TextAndImageSlide, { ITextAndImageSlide } from "./TextAndImageSlide";
import CenteredTextSlide, { ICenteredTextSlide } from "./CenteredTextSlide";
import TeamSlide, { ITeamSlide } from "./TeamSlide";
import ElementsSlide, { IElementsSlide } from "./ElementsSlide";
import ElementsAltSlide from "./ElementsAltSlide";
import QuoteSlide, { IQuoteSlide } from "./QuoteSlide";
import KeyFiguresSlide, { IKeyFiguresSlide } from "./KeyFiguresSlide";
import ChartSlide, { IChartSlide } from "./ChartSlide";
import ErrorSlide from "./ErrorSlide";
import styles from "./BaseSlide.module.scss";

export interface IBaseSlide {
    dark_theme_enabled: BooleanField;
    chapter_name: TitleField;
    slide_navigation_id: TitleField;
    slide_bg_pattern?: ImageField;
}

interface BaseSlideProps {
    className?: string;
    content:
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
}

/**
 * Determines what's the type of the current slide
 */
export function getCurrentSlide({ slice_type, primary, items }: Slice): JSX.Element {
    if (!slice_type) return <ErrorSlide />;

    const content = primary as any;
    const componentMap = {
        title_slide: <IntroductionSlide {...{ content }} />,
        agenda_slide: <AgendaSlide {...{ content }} />,
        chapter_intro_slide: <ChapterIntroSlide {...{ content }} />,
        text_slide: <TextSlide content={{ ...content, text_blocks: items }} />,
        text_and_image_slide: <TextAndImageSlide {...{ content }} />,
        centered_text_slide: <CenteredTextSlide {...{ content }} />,
        team_slide: <TeamSlide content={{ ...content, team: items }} />,
        elements_slide: <ElementsSlide content={{ ...content, elements: items }} />,
        elements_alt_slide: <ElementsAltSlide content={{ ...content, elements: items }} />,
        quote_slide: <QuoteSlide {...{ content }} />,
        key_figures_slide: <KeyFiguresSlide content={{ ...content, key_figures: items }} />,
        chart_slide: <ChartSlide content={{ ...content, chart_items: items }} />
    } as { [key: string]: JSX.Element };

    return componentMap[slice_type] ?? <ErrorSlide />;
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
            {props.children}
        </div>
    );
}
