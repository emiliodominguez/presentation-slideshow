import { ReactElement, useContext } from "react";
import { GlobalDataContext } from "@app/contexts/global-data";
import { NavigationContext } from "@app/contexts/navigation";
import { ISlide } from "@app/components/Slides";
import styles from "./Breadcrumbs.module.scss";
import { TitleField } from "@prismicio/types";

/**
 * The presentation chapters breadcrumbs
 */
export default function Breadcrumbs(): ReactElement {
    const { body, project_client, project_title } = useContext(GlobalDataContext);
    const { currentIndex } = useContext(NavigationContext);
    const chapter_name = body[currentIndex].primary.chapter_name as TitleField<"filled">;

    return (
        <div className={styles.breadcrumbs}>
            {project_client && project_client.length > 0 && project_client[0].text && (
                <span>{project_client[0].text}</span>
            )}

            {project_title && project_title.length > 0 && project_title[0].text && (
                <span className={styles.title}>{project_title[0].text}</span>
            )}

            {chapter_name && chapter_name.length > 0 && chapter_name[0].text && (
                <span className={styles.chapter}>{chapter_name[0].text}</span>
            )}
        </div>
    );
}
