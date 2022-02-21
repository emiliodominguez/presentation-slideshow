import { hexToRgb, getContrastColor } from "@app/shared/helpers/colors";

describe("hexToRgb", () => {
    test("should return an RGB color both for 6 or 3 digit hex input", () => {
        // Given
        const redHex = "#ff0000";
        const whiteHex = "#fff";

        // When
        const redRgb = hexToRgb(redHex);
        const whiteRgb = hexToRgb(whiteHex);

        // Then
        expect(redRgb).toEqual({ r: 255, g: 0, b: 0 });
        expect(whiteRgb).toEqual({ r: 255, g: 255, b: 255 });
    });

    test("should throw an error if result is invalid", () => {
        // Given
        const invalidHex = "#fff0000";

        // When
        const result = () => hexToRgb(invalidHex);

        // Then
        expect(result).toThrowError();
    });
});

describe("getContrastColor", () => {
    test("should return the default light color if input color is dark and no dark contrast color override is configured", () => {
        // Given
        const lightColor = "#fff"; // White

        // When
        const result = getContrastColor(lightColor);

        // Then
        expect(result).toEqual("#000");
    });

    test("should return the default dark color if input color is light and no light contrast color override is configured", () => {
        // Given
        const darkColor = "#000"; // Black

        // When
        const result = getContrastColor(darkColor);

        // Then
        expect(result).toEqual("#fff");
    });

    test("should return a the corresponding contrast custom color", () => {
        // Given
        const lightColor = "#fff"; // White
        const darkColor = "#000"; // Black
        const lightColorContrast = "#222";
        const darkColorContrast = "#ccc";

        // When
        const lightColorResult = getContrastColor(lightColor, lightColorContrast, darkColorContrast);
        const darkColorResult = getContrastColor(darkColor, lightColorContrast, darkColorContrast);

        // Then
        expect(lightColorResult).toEqual(darkColorContrast);
        expect(darkColorResult).toEqual(lightColorContrast);
    });
});
