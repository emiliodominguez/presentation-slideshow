import { createContext, PropsWithChildren, useRef, useState, KeyboardEvent } from "react";
import useEventListener from "@app/hooks/useEventListener";

interface DisabledNavigation {
    previous: boolean;
    next: boolean;
}

interface INavigationContext {
    currentIndex: number;
    count: number;
    disabledNav: DisabledNavigation;
    goTo: (index: number) => void;
    goToNext: () => void;
    goToPrevious: () => void;
    setCount: (count: number) => void;
    toggleInfinite: () => void;
}

enum AnimationDirection {
    Next = 1,
    Previous = -1
}

export const NavigationContext = createContext<INavigationContext>({} as any);

/**
 * Navigation context provider
 */
export default function NavigationContextProvider(props: PropsWithChildren<{}>): JSX.Element {
    const countRef = useRef<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [infinite, setInfinite] = useState<boolean>(false);

    /**
     * Sets the slides count
     * @param count - The slides amount
     */
    function setCount(count: number): void {
        countRef.current = count;
    }

    /**
     * Sets a custom property for the slides animation direction
     * @param direction The navigation direction
     */
    function setAnimationDirection(direction: AnimationDirection): void {
        document.documentElement.style.setProperty("--animation-direction", direction.toString());
    }

    /**
     * Goes to an specific index
     * @param index - The index
     */
    function goTo(index: number): void {
        const { Next, Previous } = AnimationDirection;
        setAnimationDirection(index > currentIndex ? Next : Previous);
        setCurrentIndex(index);
    }

    /**
     * Goes to next index
     */
    function goToNext(): void {
        setCurrentIndex((current: number) => {
            const infiniteNext = (current + 1) % countRef.current;
            const regularNext = current < countRef.current - 1 ? current + 1 : current;
            const index = infinite ? infiniteNext : regularNext;
            setAnimationDirection(AnimationDirection.Next);
            return index;
        });
    }

    /**
     * Goes to previous index
     */
    function goToPrevious(): void {
        setCurrentIndex((current: number) => {
            const infinitePrevious = current === 0 ? countRef.current - 1 : current - 1;
            const regularPrevious = current > 0 ? current - 1 : current;
            const index = infinite ? infinitePrevious : regularPrevious;
            setAnimationDirection(AnimationDirection.Previous);
            return index;
        });
    }

    /**
     * Handles the navigation by keyboard
     * @param e - The keyboard event
     */
    function navigate(e: KeyboardEvent): void {
        const rightKey = e.key === "ArrowRight";
        const leftKey = e.key === "ArrowLeft";

        if (leftKey || rightKey) {
            e.preventDefault();
            if (rightKey) goToNext();
            if (leftKey) goToPrevious();
        }
    }

    useEventListener("keydown", navigate);

    return (
        <NavigationContext.Provider
            value={{
                currentIndex,
                count: countRef.current,
                disabledNav: {
                    previous: infinite ? false : currentIndex === 0,
                    next: infinite ? false : countRef.current - 1 === currentIndex
                },
                goTo,
                goToNext,
                goToPrevious,
                setCount,
                toggleInfinite: () => setInfinite(!infinite)
            }}
        >
            {props.children}
        </NavigationContext.Provider>
    );
}
