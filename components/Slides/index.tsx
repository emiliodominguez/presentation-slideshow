import React, { useContext } from "react";
import { Slice, BooleanField, TitleField, ImageField } from "@prismicio/types";
import { NavigationContext } from "@app/contexts/navigation";
import { GlobalDataContext } from "@app/contexts/global-data";
import IntroductionSlide from "./IntroductionSlide";
import AgendaSlide from "./AgendaSlide";
import ChapterIntroSlide from "./ChapterIntroSlide";
import TextSlide from "./TextSlide";
import TextAndImageSlide from "./TextAndImageSlide";
import CenteredTextSlide from "./CenteredTextSlide";
import TeamSlide from "./TeamSlide";
import ElementsSlide from "./ElementsSlide";
import ElementsAltSlide from "./ElementsAltSlide";
import QuoteSlide from "./QuoteSlide";
import KeyFiguresSlide from "./KeyFiguresSlide";
import ChartSlide from "./ChartSlide";
import ErrorSlide from "./ErrorSlide";
import BaseSlide from "../Shared/BaseSlide";

export interface ISlide {
    dark_theme_enabled: BooleanField;
    chapter_name: TitleField;
    slide_navigation_id: TitleField;
    slide_bg_pattern?: ImageField;
}

/**
 * Sets the current slide based on its type
 */
function setCurrentSlide(slice: Slice): JSX.Element {
    if (!slice) return <ErrorSlide />;

    const { slice_type, primary, items } = slice;
    const content = primary as any;
    const componentMap = {
        title_slide: <IntroductionSlide content={content} />,
        agenda_slide: <AgendaSlide content={content} />,
        chapter_intro_slide: <ChapterIntroSlide content={content} />,
        text_slide: <TextSlide content={{ ...content, text_blocks: items }} />,
        text_and_image_slide: <TextAndImageSlide content={content} />,
        centered_text_slide: <CenteredTextSlide content={content} />,
        team_slide: <TeamSlide content={{ ...content, team: items }} />,
        elements_slide: <ElementsSlide content={{ ...content, elements: items }} />,
        elements_alt_slide: <ElementsAltSlide content={{ ...content, elements: items }} />,
        quote_slide: <QuoteSlide content={content} />,
        key_figures_slide: <KeyFiguresSlide content={{ ...content, key_figures: items }} />,
        chart_slide: <ChartSlide content={{ ...content, chart_items: items }} />
    } as { [key: string]: JSX.Element };

    return componentMap[slice_type] ?? <ErrorSlide />;
}

/**
 * The main slide component
 */
export default function Slide(): JSX.Element {
    const { currentIndex } = useContext(NavigationContext);
    const { body } = useContext(GlobalDataContext);

    return (
        <BaseSlide key={`slide_${currentIndex}`}>{setCurrentSlide(body[currentIndex])}</BaseSlide>
    );
}
