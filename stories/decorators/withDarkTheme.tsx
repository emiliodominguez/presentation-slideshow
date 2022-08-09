import { useEffect } from "@storybook/addons";
import { PartialStoryFn, StoryContext } from "@storybook/csf";
import { ReactFramework } from "@storybook/react";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

/**
 * A decorator that sets the dark theme on a slide
 */
export default function withDarkTheme<Args = any>(
    StoryFn: PartialStoryFn<ReactFramework, Args>,
    context: StoryContext<ReactFramework, Args>
): StoryFnReactReturnType {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const body = context.canvasElement.parentElement!;
        const className = "dark-theme";

        setTimeout(() => {
            body.classList.add(className);
        });

        return () => {
            body.classList.remove(className);
        };
    }, [context]);

    return StoryFn();
}
