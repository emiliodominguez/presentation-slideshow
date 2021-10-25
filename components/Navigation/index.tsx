import { useContext } from "react";
import { Slice, TitleField } from "@prismicio/types";
import { NavigationContext } from "@app/contexts/navigation";
import { className } from "@app/shared/helpers/classname";
import { keyShortcuts } from "@app/shared/shortcuts";
import { icons } from "@app/shared/icons";
import EdgeBox from "../Shared/EdgeBox";
import styles from "./Navigation.module.scss";

export interface NavigationProps {
    items: string[];
}

/**
 * Gets the navigation items labels
 */
export function getNavigationItems(slides: Slice[]): string[] {
    if (!slides || slides.length === 0) throw new Error("Couldn't load navigation items");

    return slides.map((x, i) => {
        const id = x.primary.slide_navigation_id as TitleField;
        return id.length > 0 ? id[0].text : `Slide ${i + 1}`;
    });
}

/**
 * The navigation component
 */
export default function Navigation(props: NavigationProps): JSX.Element {
    const { currentIndex, disabledNav, goTo, goToNext, goToPrevious } =
        useContext(NavigationContext);

    return (
        <EdgeBox keyShortcut={keyShortcuts.toggleNavigation} boxPosition="bottom">
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
