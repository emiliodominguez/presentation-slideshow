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
        id: "en-us",
        alt: "English - United States",
        text: "EN-US"
    }
]);

const defaultLocale = (locales.find(x => x.default) ?? locales[0]).id;

export const LocalizationContext = createContext<ILocalizationContext>({} as ILocalizationContext);

/**
 * Localization context provider
 */
export default function LocalizationContextProvider(props: PropsWithChildren<{}>): JSX.Element {
    const [locale, setLocale] = useState<string>(defaultLocale);

    return (
        <LocalizationContext.Provider value={{ locale, setLocale }}>
            {props.children}
        </LocalizationContext.Provider>
    );
}
