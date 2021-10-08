/**
 * Creates a slug from a string
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
 * Capitalizes a string
 * @param string - The string
 * @returns A capitalized string
 */
export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts a regular string to camel case
 * @param string - The string
 * @returns A camel cased string
 */
export function camelCase(string: string): string {
    return string
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index == 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, "");
}
