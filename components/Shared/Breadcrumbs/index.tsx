import { ReactElement } from "react";
import { TitleField } from "@prismicio/types";
import styles from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps {
    client?: TitleField;
    presentationTitle?: TitleField;
    chapterName?: TitleField;
}

/**
 * The presentation chapters breadcrumbs
 */
export default function Breadcrumbs(props: BreadcrumbsProps): ReactElement {
    return (
        <div className={styles.breadcrumbs}>
            {props.client && props.client.length > 0 && <span>{props.client[0].text}</span>}

            {props.presentationTitle && props.presentationTitle.length > 0 && (
                <span className={styles.title}>{props.presentationTitle[0].text}</span>
            )}

            {props.chapterName && props.chapterName.length > 0 && (
                <span className={styles.chapter}>{props.chapterName[0].text}</span>
            )}
        </div>
    );
}
