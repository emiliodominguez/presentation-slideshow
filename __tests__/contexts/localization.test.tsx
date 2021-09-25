import { PropsWithChildren, useContext } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import LocalizationContextProvider, {
    LocalizationContext,
    locales
} from "@app/contexts/localization";

/**
 * A mocked provider component
 */
function MockedProvider(props: PropsWithChildren<{}>): JSX.Element {
    return <LocalizationContextProvider>{props.children}</LocalizationContextProvider>;
}

/**
 * A dummy component using the Localization context
 */
function DummyComponent(props: { customLocale?: string }): JSX.Element {
    const { locale, setLocale } = useContext(LocalizationContext);
    return <button onClick={() => setLocale(props.customLocale!)}>{locale}</button>;
}

afterEach(cleanup);

test("should return a default language", () => {
    // Given

    // When
    render(<DummyComponent />, { wrapper: MockedProvider });

    // Then
    expect(screen.getByText(locales.find(x => x.default)!.id)).toBeInTheDocument();
});

test("should change the locale", () => {
    // Given
    const customLocale = locales.find(x => !x.default)!.id;
    const component = render(<DummyComponent customLocale={customLocale} />, {
        wrapper: MockedProvider
    });
    const changeLocaleButton = component.getByRole("button");

    // When
    changeLocaleButton.click();

    // Then
    expect(screen.getByText(customLocale)).toBeInTheDocument();
});
