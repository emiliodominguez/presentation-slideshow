import { KeyboardEvent, PropsWithChildren, useState } from "react";
import { className } from "@app/shared/helpers/classname";
import useEventListener from "@app/hooks/useEventListener";
import { icons } from "@app/shared/icons";
import styles from "./EdgeBox.module.scss";

export enum EdgeBoxPosition {
    Top,
    Bottom,
    Left,
    Right
}

interface EdgeBoxProps {
    boxPosition: EdgeBoxPosition;
    startHidden?: boolean;
    keyShortcut?: (e: KeyboardEvent) => boolean;
}

/**
 * A hideable box component
 */
export default function EdgeBox(props: PropsWithChildren<EdgeBoxProps>): JSX.Element {
    const [hidden, setHidden] = useState<boolean>(props.startHidden ?? false);

    /**
     * Toggle navigation by keyboard
     * @param e - The keyboard event
     */
    function toggleVisibility(e: KeyboardEvent): void {
        if (props.keyShortcut && props.keyShortcut(e)) {
            e.preventDefault();
            setHidden(prevState => !prevState);
        }
    }

    /**
     * Sets the box position
     */
    function setBoxPosition(): string {
        switch (props.boxPosition) {
            case EdgeBoxPosition.Bottom:
                return styles.toBottom;
            case EdgeBoxPosition.Left:
                return styles.toLeft;
            case EdgeBoxPosition.Right:
                return styles.toRight;
            case EdgeBoxPosition.Top:
            default:
                return styles.toTop;
        }
    }

    /**
     * Sets the toggler icon depending on the position
     */
    function setTogglerIcon(): JSX.Element {
        switch (props.boxPosition) {
            case EdgeBoxPosition.Bottom:
                return icons.chevronDown;
            case EdgeBoxPosition.Left:
                return icons.chevronLeft;
            case EdgeBoxPosition.Right:
                return icons.chevronRight;
            default:
            case EdgeBoxPosition.Top:
                return icons.chevronUp;
        }
    }

    useEventListener("keydown", toggleVisibility);

    return (
        <div
            {...className(styles.edgeBox, setBoxPosition(), {
                [styles.hidden]: hidden
            })}
        >
            <button className={styles.toggler} onClick={() => setHidden(!hidden)}>
                {setTogglerIcon()}
            </button>

            {props.children}
        </div>
    );
}
