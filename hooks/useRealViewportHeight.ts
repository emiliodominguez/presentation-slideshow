import { useEffect, useRef } from "react";
import useEventListener from "./useEventListener";

/**
 * Sets a real viewport height unit
 */
export default function useRealViewportHeight(): void {
    const vhUnitTimeout = useRef<number>(0);

    /**
     * Gets the viewport height unit in pixels
     */
    function getViewportHeightUnit(): void {
        clearTimeout(vhUnitTimeout.current);

        vhUnitTimeout.current = window.setTimeout(() => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }, 100);
    }

    useEffect(() => {
        getViewportHeightUnit();
        return () => clearTimeout(vhUnitTimeout.current);
    }, []);

    useEventListener("resize", getViewportHeightUnit);
}
