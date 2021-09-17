import { createContext, PropsWithChildren, useState } from "react";

interface DisabledNavigation {
    next: boolean;
    previous: boolean;
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
export default function NavigationContextProvider(
    props: PropsWithChildren<{}>
): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [infinite, setInfinite] = useState<boolean>(true);

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
        const infiniteNext = (currentIndex + 1) % count;
        const regularNext =
            currentIndex < count - 1 ? currentIndex + 1 : currentIndex;
        const index = infinite ? infiniteNext : regularNext;
        setCurrentIndex(index);
    }

    /**
     * Goes to previous index
     */
    function goToPrevious(): void {
        const infinitePrevious =
            currentIndex === 0 ? count - 1 : currentIndex - 1;
        const regularPrevious =
            currentIndex > 0 ? currentIndex - 1 : currentIndex;
        const index = infinite ? infinitePrevious : regularPrevious;
        setCurrentIndex(index);
    }

    return (
        <NavigationContext.Provider
            value={{
                currentIndex,
                count,
                disabledNav: {
                    next: infinite ? false : count - 1 === currentIndex,
                    previous: infinite ? false : currentIndex === 0
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
