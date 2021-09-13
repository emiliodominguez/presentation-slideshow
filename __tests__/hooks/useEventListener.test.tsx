import { render, cleanup } from "@testing-library/react";
import useEventListener from "@app/hooks/useEventListener";

const testTarget = document.body;
const testEvent = "click";
const registeredEvents = new Map<string, EventListenerOrEventListenerObject>();

function DummyComponent(): JSX.Element {
    // Registers a click event on the body
    useEventListener(testEvent, jest.fn, testTarget);
    return <></>;
}

beforeEach(() => {
    jest.spyOn(testTarget, "addEventListener").mockImplementation(
        (event, handler, _options?) => registeredEvents.set(event, handler)
    );

    jest.spyOn(testTarget, "removeEventListener").mockImplementation(
        (event, _handler, _options?) => registeredEvents.delete(event)
    );
});

afterEach(() => {
    jest.restoreAllMocks();
    registeredEvents.clear();
    cleanup();
});

test("should register an event listener when the component is mounted", () => {
    // Given
    expect(registeredEvents.size).toBe(0);
    expect(registeredEvents.has(testEvent)).toBe(false);

    // When
    render(<DummyComponent />);

    // Then
    expect(registeredEvents.size).toBe(1);
    expect(registeredEvents.has(testEvent)).toBe(true);
});

test("should unregister an event listener when the component is unmounted", () => {
    // Given
    const component = render(<DummyComponent />);

    expect(registeredEvents.size).toBe(1);
    expect(registeredEvents.has(testEvent)).toBe(true);

    // When
    component.unmount();

    // Then
    expect(registeredEvents.size).toBe(0);
    expect(registeredEvents.has(testEvent)).toBe(false);
});
