import { PropsWithChildren } from "react";
import LanguageSelector from "./LanguageSelector";
import Navigation from "./Navigation";
import styles from "./Layout.module.scss";

/**
 * The layout component
 */
export default function Layout(props: PropsWithChildren<{}>): JSX.Element {
    return (
        <main className={styles.main}>
            {props.children}
            <LanguageSelector />
            <Navigation />
        </main>
    );
}
