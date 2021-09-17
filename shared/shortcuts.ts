import { KeyboardEvent } from "react";

export const keyShortcuts = {
    toggleNavigation: (e: KeyboardEvent) => e.ctrlKey && e.key === "b",
    toggleLanguage: (e: KeyboardEvent) => e.ctrlKey && e.key === "l"
};
