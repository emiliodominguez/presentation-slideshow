/**
 * @param string The string
 * @returns The string lowercased and separated by dashes
 */
export function slugify(string: string): string {
    return string
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+|-+$/, "");
}

/**
 * @param string - The string
 * @returns A capitalized string
 */
export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
