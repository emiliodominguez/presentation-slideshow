import { className } from "@app/shared/helpers/classname";
import PrismicDOM from "prismic-dom";
import { useEffect, useRef, useState } from "react";
import { NasaSlideProps } from "./interfaces";
import styles from "./NasaSlide.module.scss";

/**
 * The Nasa slide
 */
export default function NasaSlide(props: NasaSlideProps): JSX.Element {
    const backgroundRef = useRef<HTMLImageElement | null>(null);
    const [imgLoaded, setImgLoaded] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const data = await (await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)).json();

            if (backgroundRef.current) {
                backgroundRef.current.onload = () => setImgLoaded(true);
                backgroundRef.current.src = data.hdurl;
            }
        })();
    }, []);

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={backgroundRef} alt="Background" {...className(styles.background, { [styles.loaded]: imgLoaded })} />

            {!imgLoaded && <span className={styles.spinner} />}

            <div className={styles.textContent}>
                <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

                <div
                    className="body-text"
                    dangerouslySetInnerHTML={{
                        __html: PrismicDOM.RichText.asHtml(props.content.slide_description)
                    }}
                />
            </div>
        </>
    );
}
