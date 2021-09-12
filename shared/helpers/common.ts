/**
 * @returns A boolean that determines whether the Window object exists or not
 */
export function isBrowser(): boolean {
    return typeof window !== "undefined";
}
