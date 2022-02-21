import { render, cleanup } from "@testing-library/react";
import useRealViewportHeight from "@app/hooks/useRealViewportHeight";

const registeredEvents = new Map<string, EventListenerOrEventListenerObject>();

/**
 * A dummy component using the useRealViewportHeight hook
 */
function DummyComponent(): JSX.Element {
    useRealViewportHeight();
    return <></>;
}

// function getVhValue() {
//     return document.documentElement.style.getPropertyValue("--vh");
// }

beforeEach(() => {
    jest.spyOn(window, "addEventListener").mockImplementation((event, handler, _options?) => registeredEvents.set(event, handler));

    jest.spyOn(window, "removeEventListener").mockImplementation((event, _handler, _options?) => registeredEvents.delete(event));
});

afterEach(() => {
    jest.restoreAllMocks();
    registeredEvents.clear();
    cleanup();
});

test("should register a global resize event listener when the component is mounted", () => {
    // Given
    expect(registeredEvents.size).toBe(0);
    expect(registeredEvents.has("resize")).toBe(false);

    // When
    render(<DummyComponent />);

    // Then
    expect(registeredEvents.size).toBe(1);
    expect(registeredEvents.has("resize")).toBe(true);
});

test("should unregister the global resize event listener when the component is unmounted", () => {
    // Given
    const component = render(<DummyComponent />);

    expect(registeredEvents.size).toBe(1);
    expect(registeredEvents.has("resize")).toBe(true);

    // When
    component.unmount();

    // Then
    expect(registeredEvents.size).toBe(0);
    expect(registeredEvents.has("resize")).toBe(false);
});

// TODO: Should add a test to check if the value is added on first render and if the window size changes
