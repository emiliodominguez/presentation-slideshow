import { useContext } from "react";
import { LocalizationContext, locales } from "@app/contexts/localization";
import styles from "./LanguageSelector.module.scss";
import { className } from "@app/shared/helpers/classname";

/**
 * The Language selector component
 */
export default function LanguageSelector(): JSX.Element {
    const { locale, setLocale } = useContext(LocalizationContext);

    return (
        <div className={styles.languageSelector}>
            {locales.map(x => (
                <button
                    key={x.id}
                    title={x.alt}
                    onClick={() => setLocale(x.id)}
                    {...className({
                        [styles.current]: locale === x.id
                    })}>
                    <span>{x.text}</span>
                </button>
            ))}
        </div>
    );
}
