import { useRef, useEffect } from "react";
import { isBrowser } from "@app/shared/helpers/common";

/**
 * Sets and removes event listeners
 *
 * @param event     - A string which represents the event to listen
 * @param callback  - The callback function for the event listener
 * @param target    - Target element (window by default)
 * @param options   - The event listener options
 */
export default function useEventListener(
    event: string,
    callback: EventListenerOrEventListenerObject,
    target?: HTMLElement,
    options?: boolean | AddEventListenerOptions
): void {
    const savedCallback = useRef<EventListenerOrEventListenerObject>(callback);
    const savedTarget = useRef<HTMLElement | Window>(
        target ?? ((isBrowser() && window) as Window)
    );

    useEffect(() => {
        const targetRef = savedTarget.current;
        const supportsEventListener = targetRef && targetRef.addEventListener;

        if (!isBrowser() && !supportsEventListener && !savedCallback?.current)
            return;

        const eventListener = savedCallback.current;
        targetRef.addEventListener(event, eventListener, options);

        return () => {
            targetRef.removeEventListener(event, eventListener, options);
        };
    }, [event, target, options]);
}
