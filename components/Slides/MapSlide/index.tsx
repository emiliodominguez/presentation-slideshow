import { ReactElement, useRef, useEffect, useState, useCallback } from "react";
import { LngLatLike } from "mapbox-gl";
import PrismicDOM from "prismic-dom";
import { className } from "@app/shared/helpers/classname";
import { camelCase } from "@app/shared/helpers/strings";
import EdgeBox, { EdgeBoxPosition } from "@app/components/Shared/EdgeBox";
import MapService from "./services/MapService";
import { MapSlideProps } from "./MapSlide.model";
import styles from "./MapSlide.module.scss";

/**
 * An interactive map slide
 */
export default function MapSlide(props: MapSlideProps): ReactElement {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapService = useRef<MapService | null>(null);
    const [current, setCurrent] = useState<number | null>(() => (props.content.locations.length > 0 ? 0 : null));

    /**
     * Gets the first location (if there's any) position to set the map center
     * @returns The longitude and latitude of the first location
     */
    const getFirstLocationCenter = useCallback((): LngLatLike | undefined => {
        if (!props.content.locations || props.content.locations.length === 0) return undefined;

        const { location_longitude, location_latitude } = props.content.locations[0];
        return [location_longitude ?? 0, location_latitude ?? 0];
    }, [props.content.locations]);

    /**
     * Goes to a specific location
     * @param index - The element index
     * @param position - The location latitude and longitude
     */
    function flyToLocation(index: number, position: LngLatLike): void {
        mapService.current?.flyToLocation({ center: position, curve: 1, zoom: 12 });
        setCurrent(index);
    }

    // Initial setup
    useEffect(() => {
        if (!mapRef.current) return;

        // Instantiate Map Service
        if (!mapService.current)
            mapService.current = new MapService(
                {
                    container: mapRef.current,
                    center: getFirstLocationCenter(),
                    style: props.content.slide_map ? camelCase(props.content.slide_map as string) : undefined
                },
                props.content.dark_theme_enabled
            );

        // Set markers
        props.content.locations.map(x =>
            mapService.current?.addMarker(x.location_name[0].text, [Number(x.location_longitude), Number(x.location_latitude)])
        );
    }, [props.content, getFirstLocationCenter]);

    // Dispose resources
    useEffect(() => {
        return () => {
            mapService.current?.clear();
            mapService.current = null;
        };
    }, []);

    return (
        <>
            <div ref={mapRef} className={styles.map} />

            {/* Locations tags */}
            <div className={styles.locations}>
                {props.content.locations.length > 0 &&
                    props.content.locations.map((x, i) => (
                        <button
                            key={`location_${i}`}
                            {...className({ [styles.current]: i === current })}
                            style={{
                                backgroundImage: x.location_picture ? `url(${x.location_picture.url})` : undefined
                            }}
                            onClick={() => flyToLocation(i, [Number(x.location_longitude), Number(x.location_latitude)])}
                        >
                            <span>{x.location_name[0].text}</span>
                        </button>
                    ))}
            </div>

            {/* Location description box */}
            {current !== null && props.content.locations[current] && (
                <EdgeBox boxPosition={EdgeBoxPosition.Right}>
                    <div key={props.content.locations[current].location_name[0].text} className={styles.locationDetail}>
                        <div
                            className={styles.detailHeader}
                            style={{
                                backgroundImage: props.content.locations[current].location_picture
                                    ? `url(${props.content.locations[current].location_picture.url})`
                                    : undefined
                            }}
                        />

                        <div className={styles.detailContent}>
                            <h3 className="title-medium">{props.content.locations[current].location_name[0].text}</h3>

                            <div
                                className="body-text-small"
                                dangerouslySetInnerHTML={{
                                    __html: PrismicDOM.RichText.asHtml(props.content.locations[current].location_description)
                                }}
                            />
                        </div>
                    </div>
                </EdgeBox>
            )}
        </>
    );
}
