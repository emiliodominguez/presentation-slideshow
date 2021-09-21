import { PropsWithChildren, useRef, useEffect } from "react";
import { className } from "@app/shared/helpers/classname";
import { IIntroductionSlide } from "./IntroductionSlide";
import { IAgendaSlide } from "./AgendaSlide";
import { IChapterIntroSlide } from "./ChapterIntroSlide";
import { ITeamSlide } from "./TeamSlide";
import styles from "./BaseSlide.module.scss";

interface BaseSlideProps {
    content:
        | IIntroductionSlide
        | IAgendaSlide
        | IChapterIntroSlide
        | ITeamSlide;
    className?: string;
}

type CustomPropertiesSetup = { [key: string]: string };

/**
 * Base slide container
 */
export default function BaseSlide(
    props: PropsWithChildren<BaseSlideProps>
): JSX.Element {
    const slideRef = useRef<HTMLDivElement | null>(null);

    /**
     * Sets the custom properties values if there's any
     * @returns The custom properties setup
     */
    function setCustomProperties(): CustomPropertiesSetup {
        return {
            ["--slide-bg-pattern"]: props.content.slide_bg_pattern?.url
                ? `url(${props.content.slide_bg_pattern.url})`
                : ""
        };
    }

    useEffect(() => {
        if (!!props.content.dark_theme_enabled) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [props.content]);

    return (
        <div
            ref={slideRef}
            style={setCustomProperties()}
            {...className(styles.slide, props.className)}
        >
            {props.children}
        </div>
    );
}
