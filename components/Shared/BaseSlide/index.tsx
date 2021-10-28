import React, { PropsWithChildren, useContext, useRef, useState, useEffect, useMemo } from "react";
import { ImageField, Slice } from "@prismicio/types";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import { GlobalDataContext } from "@app/pages";
import { NavigationContext } from "@app/contexts/navigation";
import Breadcrumbs from "../Breadcrumbs";
import styles from "./BaseSlide.module.scss";
import { ISlide } from "@app/components/Slides";

interface BaseSlideProps {
    className?: string;
    hideBreadcrumbs?: boolean;
}

/**
 * Base slide container
 */
export default function BaseSlide(props: PropsWithChildren<BaseSlideProps>): JSX.Element {
    const { body } = useContext(GlobalDataContext);
    const { currentIndex } = useContext(NavigationContext);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const resizeTimeoutRef = useRef<number | undefined>(undefined);
    const [hasOverflow, setHasOverflow] = useState<boolean>(false);
    const { primary } = useMemo(
        () => body[currentIndex] as Slice<Partial<ISlide>>,
        [body, currentIndex]
    );

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
        const action = primary.dark_theme_enabled ? "add" : "remove";
        document.body.classList[action]("dark-theme");

        return () => clearTimeout(resizeTimeoutRef.current);
    }, [primary.dark_theme_enabled]);

    useEventListener("resize", checkOverflow);

    return (
        <div
            ref={slideRef}
            {...className(styles.slide, props.className)}
            style={{
                ["--slide-alignment" as string]: hasOverflow ? "flex-start" : "center",
                ["--slide-bg-pattern" as string]: (primary.slide_bg_pattern as ImageField)?.url
                    ? `url(${(primary.slide_bg_pattern as ImageField).url})`
                    : undefined
            }}
        >
            {!props.hideBreadcrumbs && <Breadcrumbs />}
            {props.children}
        </div>
    );
}
