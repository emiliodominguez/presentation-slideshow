import { useContext, useState, KeyboardEvent } from "react";
import { NavigationContext } from "@app/contexts/navigation";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import { keyShortcuts } from "@app/shared/shortcuts";
import { icons } from "@app/shared/icons";
import styles from "./Navigation.module.scss";

interface NavigationProps {
    items: string[];
}

/**
 * The navigation component
 */
export default function Navigation(props: NavigationProps): JSX.Element {
    const [hidden, setHidden] = useState<boolean>(false);
    const { currentIndex, disabledNav, goTo, goToNext, goToPrevious } =
        useContext(NavigationContext);

    /**
     * Toggle navigation by keyboard
     * @param e - The keyboard event
     */
    function toggleVisibility(e: KeyboardEvent): void {
        if (keyShortcuts.toggleNavigation(e)) {
            e.preventDefault();
            setHidden(prevState => !prevState);
        }
    }

    /**
     * Handles the navigation by keyboard
     * @param e - The keyboard event
     */
    function navigate(e: KeyboardEvent): void {
        // const rightKey = e.key === "ArrowRight";
        // const leftKey = e.key === "ArrowLeft";

        // if (leftKey || rightKey) {
        //     e.preventDefault();
        //     if (rightKey) goToNext();
        //     if (leftKey) goToPrevious();
        // }
    }

    /**
     * Handles the key down event
     * @param e - The keyboard event
     */
    function handleKeyDown(e: KeyboardEvent): void {
        toggleVisibility(e);
        navigate(e);
    }

    useEventListener("keydown", handleKeyDown);

    return (
        <nav {...className(styles.navigation, { [styles.hidden]: hidden })}>
            {/* Toggle navigation visibility */}
            <button
                className={styles.toggler}
                onClick={() => setHidden(!hidden)}
            >
                {icons.chevronDown}
            </button>

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
    );
}
