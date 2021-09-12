import { isBrowser } from "@shared/helpers/common";

describe("isBrowser", () => {
    let windowSpy: jest.SpyInstance<Window | undefined>;

    beforeEach(() => {
        windowSpy = jest.spyOn(window, "window", "get");
    });

    afterEach(() => {
        windowSpy.mockRestore();
    });

    test("should return false if window is undefined", () => {
        // Given
        windowSpy.mockImplementation(() => undefined);

        // When
        const result = isBrowser();

        // Then
        expect(result).toBe(false);
    });

    test("should return true if window is not undefined", () => {
        // Given
        // The window object as is

        // When
        const result = isBrowser();

        // Then
        expect(result).toBe(true);
    });
});
