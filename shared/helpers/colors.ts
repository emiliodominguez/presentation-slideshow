interface RGB {
    r: number;
    g: number;
    b: number;
}

/**
 * Converts a hex color to RGB
 * @param hex = The hex
 * @returns The RGB color object
 */
export function hexToRgb(hex: string): RGB {
    const shortHexRegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // Validates a 3 digit hex
    hex = hex.replace(shortHexRegExp, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) throw Error("A valid HEX must be provided");

    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

/**
 * Gets a contrast color based on an initial hex
 * @param hex - The hex
 * @param lightColor - An optional light color return value
 * @param darkColor - An optional dark color return value
 * @returns The initial hex contrast color
 */
export function getContrastColor(
    hex: string,
    lightColor?: string,
    darkColor?: string
): string {
    const { r, g, b } = hexToRgb(hex);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000; // https://en.wikipedia.org/wiki/YIQ
    const contrastColors = {
        light: lightColor ?? "#fff",
        dark: darkColor ?? "#000"
    };

    return yiq >= 128 ? contrastColors.dark : contrastColors.light;
}
