import { useEffect } from "react";

/**
 * Forces the dark theme on a slide
 */
export default function useDarkTheme(): void {
    useEffect(() => {
        const body = document.body;
        const className = "dark-theme";

        body.classList.add(className);

        return () => {
            body.classList.remove(className);
        };
    }, []);
}
