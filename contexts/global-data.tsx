import { createContext, PropsWithChildren } from "react";
import { TitleField, RichTextField, ImageField, SliceZone } from "@prismicio/types";

export interface PresentationContent {
    project_client?: TitleField<"filled">;
    project_title: TitleField<"filled">;
    project_description: RichTextField<"filled">;
    isologo_black: ImageField;
    isologo_white: ImageField;
    isologo_color: ImageField;
    logo_black: ImageField;
    logo_white: ImageField;
    logo_dark: ImageField;
    logo_light: ImageField;
    body: SliceZone;
}

interface GlobalDataContextProviderProps {
    value: PresentationContent;
}

export const GlobalDataContext = createContext<PresentationContent>({} as PresentationContent);

/**
 * Global data context provider
 */
export default function GlobalDataContextProvider(props: PropsWithChildren<GlobalDataContextProviderProps>): JSX.Element {
    return <GlobalDataContext.Provider value={props.value}>{props.children}</GlobalDataContext.Provider>;
}
