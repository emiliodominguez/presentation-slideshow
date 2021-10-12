import { ReactElement } from "react";
import styles from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps {
    client?: string;
    presentationTitle?: string;
    chapterName?: string;
}

/**
 * The presentation chapters breadcrumbs
 */
export default function Breadcrumbs(props: BreadcrumbsProps): ReactElement {
    return (
        <div className={styles.breadcrumbs}>
            {props.client && <span>{props.client}</span>}

            {props.presentationTitle && (
                <span className={styles.title}>{props.presentationTitle}</span>
            )}

            {props.chapterName && <span className={styles.chapter}>{props.chapterName}</span>}
        </div>
    );
}
