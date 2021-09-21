import Image from "next/image";
import styles from "./LogoAndTitle.module.scss";

interface LogoAndTitleProps {
    title: string;
}

/**
 * A component with a title and a logo on top
 */
export default function LogoAndTitle(props: LogoAndTitleProps): JSX.Element {
    return (
        <div className={styles.logoAndTitle}>
            <Image
                width={50}
                height={50}
                objectFit="contain"
                src="/images/logo/isologo_orange.png"
                alt="Endava isologo"
            />

            <h2 className="title-medium">{props.title}</h2>
        </div>
    );
}
