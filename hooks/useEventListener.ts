import { useEffect, useRef, useCallback } from "react";
import { isBrowser } from "@app/shared/helpers/common";

/**
 * ### Sets and removes event listeners
 *
 * @param event A string which represents the event to listen
 * @param callback The callback function for the event listener
 * @param target Target element (window by default)
 * @param options The event listener options
 */
export default function useEventListener(
    event: string,
    callback: (e: any) => void,
    target: HTMLElement | Window | MediaQueryList = isBrowser() ? window : (undefined as any),
    options?: boolean | AddEventListenerOptions
): void {
    const targetRef = useRef<HTMLElement | Window | MediaQueryList>(target);
    const callbackMemo = useCallback(callback, [callback]);

    useEffect(() => {
        const eventTarget = targetRef.current;
        const supportsEventListener = eventTarget && eventTarget.addEventListener;

        if (!supportsEventListener && !callbackMemo) return;

        eventTarget.addEventListener(event, callbackMemo, options);

        return () => {
            eventTarget.removeEventListener(event, callbackMemo, options);
        };
    }, [event, options, callbackMemo]);
}
