import { useContext } from "react";
import { TitleField } from "@prismicio/types";
import { GlobalDataContext } from "@app/contexts/global-data";
import { NavigationContext } from "@app/contexts/navigation";
import { className } from "@app/shared/helpers/classname";
import { keyShortcuts } from "@app/shared/shortcuts";
import { icons } from "@app/shared/icons";
import EdgeBox, { EdgeBoxPosition } from "../Shared/EdgeBox";
import styles from "./Navigation.module.scss";

/**
 * The navigation component
 */
export default function Navigation(): JSX.Element {
    const { body } = useContext(GlobalDataContext);
    const { currentIndex, disabledNav, goTo, goToNext, goToPrevious } =
        useContext(NavigationContext);

    return (
        <EdgeBox keyShortcut={keyShortcuts.toggleNavigation} boxPosition={EdgeBoxPosition.Bottom}>
            <nav className={styles.navigation}>
                {/* Go to previous item */}
                <button onClick={goToPrevious} disabled={disabledNav.previous}>
                    {icons.chevronLeft}
                </button>

                {/* Go to specific item */}
                {body.map((item, i) => {
                    const id = item.primary.slide_navigation_id as TitleField<"filled">;

                    return (
                        <button
                            key={`nav_${i}`}
                            onClick={() => goTo(i)}
                            {...className({ [styles.current]: currentIndex === i })}
                        >
                            {id.length > 0 ? id[0].text : `Slide ${i + 1}`}
                        </button>
                    );
                })}

                {/* Go to Next item */}
                <button onClick={goToNext} disabled={disabledNav.next}>
                    {icons.chevronRight}
                </button>
            </nav>
        </EdgeBox>
    );
}
