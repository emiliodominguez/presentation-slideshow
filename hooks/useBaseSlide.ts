import { useMemo, useEffect } from "react";

/**
 * Sets a custom class name to handle base slide styles from a child slide
 * @param className - The class name
 */
export default function useBaseSlide(className: string): void {
    const classNameMemo = useMemo(() => className, [className]);

    useEffect(() => {
        const baseSlide = document.querySelector("#base-slide");
        baseSlide?.classList.add(classNameMemo);

        return () => {
            baseSlide?.classList.remove(classNameMemo);
        };
    }, [classNameMemo]);
}
