import { useContext, KeyboardEvent } from "react";
import { NavigationContext } from "@app/contexts/navigation";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import { keyShortcuts } from "@app/shared/shortcuts";
import { icons } from "@app/shared/icons";
import EdgeBox, { EdgeBoxPosition } from "../Shared/EdgeBox";
import styles from "./Navigation.module.scss";

export interface NavigationProps {
    items: string[];
}

/**
 * The navigation component
 */
export default function Navigation(props: NavigationProps): JSX.Element {
    const { currentIndex, disabledNav, goTo, goToNext, goToPrevious } =
        useContext(NavigationContext);

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
        <EdgeBox keyShortcut={keyShortcuts.toggleNavigation} boxPosition={EdgeBoxPosition.Bottom}>
            <nav className={styles.navigation}>
                {/* Go to previous item */}
                <button onClick={goToPrevious} disabled={disabledNav.previous}>
                    {icons.chevronLeft}
                </button>

                {/* Go to specific item */}
                {props.items.map((item, i) => (
                    <button
                        key={`nav_${i}`}
                        onClick={() => goTo(i)}
                        {...className({
                            [styles.current]: currentIndex === i
                        })}
                    >
                        {item}
                    </button>
                ))}

                {/* Go to Next item */}
                <button onClick={goToNext} disabled={disabledNav.next}>
                    {icons.chevronRight}
                </button>
            </nav>
        </EdgeBox>
    );
}
