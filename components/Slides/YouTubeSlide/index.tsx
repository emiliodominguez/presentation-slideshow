import PrismicDOM from "prismic-dom";
import { useEffect } from "react";
import { isBrowser } from "@app/shared/helpers/common";
import useBaseSlide from "@app/hooks/useBaseSlide";
import { YouTubeSlideProps } from "./interfaces";
import styles from "./YouTubeSlide.module.scss";

/**
 * The Nasa slide
 */
export default function YouTubeSlide(props: YouTubeSlideProps): JSX.Element {
    useBaseSlide(styles.youTubeSlide);

    useEffect(() => {
        if (!isBrowser() || !(window as any).YT) return;

        new (window as any).YT.Player("youtube-video", {
            width: window.innerWidth,
            height: window.innerHeight,
            videoId: props.content.youtube_id[0].text,
            suggestedQuality: "large",
            playerVars: {
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                rel: 0
            },
            events: {
                onReady: (e: any) => {
                    e.target.playVideo();
                    e.target.mute();
                }
            }
        });
    }, [props.content.youtube_id]);

    return (
        <>
            <div className={styles.videoWrapper}>
                <div className={styles.video} id="youtube-video" />
            </div>

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
