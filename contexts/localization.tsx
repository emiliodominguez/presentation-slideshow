import { createContext, PropsWithChildren, useState } from "react";

interface ILocalizationContext {
    locale: string;
    setLocale: (locale: string) => void;
}

interface Locale {
    id: string;
    alt: string;
    text: string;
    default?: boolean;
}

export const locales = Object.freeze<Locale[]>([
    {
        id: "es-ar",
        alt: "Español - Argentina",
        text: "ES-AR",
        default: true
    },
    {
        id: "en-gb",
        alt: "English - United Kingdom",
        text: "EN-GB"
    }
]);

const defaultLocale = locales.find(x => x.default)!.id;

export const LocalizationContext = createContext<ILocalizationContext>({
    locale: defaultLocale,
    setLocale: () => {}
});

/**
 * Localization context provider
 */
export default function LocalizationContextProvider(
    props: PropsWithChildren<{}>
): JSX.Element {
    const [locale, setLocale] = useState<string>(defaultLocale);

    return (
        <LocalizationContext.Provider value={{ locale, setLocale }}>
            {props.children}
        </LocalizationContext.Provider>
    );
}
