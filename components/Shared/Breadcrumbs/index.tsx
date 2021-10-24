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
    const { client, presentationTitle, chapterName } = props;

    return (
        <div className={styles.breadcrumbs}>
            {client && client.length > 0 && client[0].text && <span>{client[0].text}</span>}

            {presentationTitle && presentationTitle.length > 0 && presentationTitle[0].text && (
                <span className={styles.title}>{presentationTitle[0].text}</span>
            )}

            {chapterName && chapterName.length > 0 && chapterName[0].text && (
                <span className={styles.chapter}>{chapterName[0].text}</span>
            )}
        </div>
    );
}
