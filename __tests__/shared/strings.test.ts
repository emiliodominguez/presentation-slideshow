import { slugify, capitalize, camelCase } from "@app/shared/helpers/strings";

describe("slugify", () => {
    test("should return a slug like string", () => {
        // Given
        const sentence = "test sentence";

        // When
        const result = slugify(sentence);

        // Then
        expect(result).toEqual("test-sentence");
    });
});

describe("capitalize", () => {
    test("should return a capitalized string", () => {
        // Given
        const sentence = "test sentence";

        // When
        const result = capitalize(sentence);

        // Then
        expect(result).toEqual("Test sentence");
    });
});

describe("camelCase", () => {
    test("should return a camel cased string", () => {
        // Given
        const sentence = "test sentence";

        // When
        const result = camelCase(sentence);

        // Then
        expect(result).toEqual("testSentence");
    });
});
