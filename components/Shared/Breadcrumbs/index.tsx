import { ReactElement, useContext } from "react";
import { TitleField } from "@prismicio/types";
import styles from "./Breadcrumbs.module.scss";
import { GlobalDataContext } from "@app/pages";

export interface BreadcrumbsProps {
    chapterName?: TitleField;
}

/**
 * The presentation chapters breadcrumbs
 */
export default function Breadcrumbs(props: BreadcrumbsProps): ReactElement {
    const { project_client, project_title } = useContext(GlobalDataContext);
    const { chapterName } = props;

    return (
        <div className={styles.breadcrumbs}>
            {project_client && project_client.length > 0 && project_client[0].text && (
                <span>{project_client[0].text}</span>
            )}

            {project_title && project_title.length > 0 && project_title[0].text && (
                <span className={styles.title}>{project_title[0].text}</span>
            )}

            {chapterName && chapterName.length > 0 && chapterName[0].text && (
                <span className={styles.chapter}>{chapterName[0].text}</span>
            )}
        </div>
    );
}
