import { className } from "@app/shared/helpers/classname";
import styles from "./Navigation.module.scss";

interface NavigationProps {
    items: string[];
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
}

/**
 * The navigation component
 */
export default function Navigation(props: NavigationProps): JSX.Element {
    return (
        <nav className={styles.navigation}>
            {props.items.map((x, i) => (
                <button
                    key={`nav_${i}`}
                    onClick={() => props.setCurrentSlide(i)}
                    {...className({
                        [styles.current]: props.currentSlide === i
                    })}>
                    {x}
                </button>
            ))}
        </nav>
    );
}
