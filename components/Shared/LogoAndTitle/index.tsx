import { useContext } from "react";
import Image from "next/image";
import { GlobalDataContext } from "@app/contexts/global-data";
import styles from "./LogoAndTitle.module.scss";

export interface LogoAndTitleProps {
    title: string;
}

/**
 * A component with a title and a logo on top
 */
export default function LogoAndTitle(props: LogoAndTitleProps): JSX.Element {
    const { isologo_color } = useContext(GlobalDataContext);

    return (
        <div className={styles.logoAndTitle}>
            <Image
                width={50}
                height={50}
                objectFit="contain"
                src={isologo_color?.url ?? "/assets/logos/isologo_color.png"}
                alt="Isologo"
            />

            <h2 className="title-medium">{props.title}</h2>
        </div>
    );
}
