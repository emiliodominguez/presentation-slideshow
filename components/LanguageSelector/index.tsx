import { KeyboardEvent, useState, useContext } from "react";
import { LocalizationContext, locales } from "@app/contexts/localization";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import { keyShortcuts } from "@app/shared/shortcuts";
import { icons } from "@app/shared/icons";
import styles from "./LanguageSelector.module.scss";

/**
 * The Language selector component
 */
export default function LanguageSelector(): JSX.Element {
    const [hidden, setHidden] = useState<boolean>(true);
    const { locale, setLocale } = useContext(LocalizationContext);

    /**
     * Toggle navigation by keyboard
     * @param e - The keyboard event
     */
    function toggleVisibilityByKeyboard(e: KeyboardEvent): void {
        if (keyShortcuts.toggleLanguage(e)) {
            e.preventDefault();
            setHidden(prevState => !prevState);
        }
    }

    useEventListener("keydown", toggleVisibilityByKeyboard);

    return (
        <div
            {...className(styles.languageSelector, { [styles.hidden]: hidden })}
        >
            {locales.map(x => (
                <button
                    key={x.id}
                    title={x.alt}
                    onClick={() => setLocale(x.id)}
                    {...className({
                        [styles.current]: locale === x.id
                    })}
                >
                    <span>{x.text}</span>
                </button>
            ))}

            {/* Toggle navigation visibility */}
            <button
                className={styles.toggler}
                onClick={() => setHidden(!hidden)}
            >
                {icons.chevronUp}
            </button>
        </div>
    );
}
