import { createContext, PropsWithChildren, useRef, useState } from "react";

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
     * Goes to an specific index
     * @param index - The index
     */
    function goTo(index: number): void {
        setCurrentIndex(index);
    }

    /**
     * Goes to next index
     */
    function goToNext(): void {
        setCurrentIndex((current: number) => {
            const infiniteNext = (current + 1) % countRef.current;
            const regularNext = current < countRef.current - 1 ? current + 1 : current;
            return infinite ? infiniteNext : regularNext;
        });
    }

    /**
     * Goes to previous index
     */
    function goToPrevious(): void {
        setCurrentIndex((current: number) => {
            const infinitePrevious = current === 0 ? countRef.current - 1 : current - 1;
            const regularPrevious = current > 0 ? current - 1 : current;
            return infinite ? infinitePrevious : regularPrevious;
        });
    }

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
