import { ReactElement, useRef, useEffect, useState, useCallback } from "react";
import { LngLatLike } from "mapbox-gl";
import PrismicDOM from "prismic-dom";
import { ImageField, NumberField, RichTextField, SelectField, TitleField } from "@prismicio/types";
import { className } from "@app/shared/helpers/classname";
import { camelCase } from "@app/shared/helpers/strings";
import EdgeBox, { EdgeBoxPosition } from "@app/components/Shared/EdgeBox";
import BaseSlide, { IBaseSlide } from "..";
import MapService from "./MapService";
import styles from "./MapSlide.module.scss";

interface Location {
    location_picture: ImageField;
    location_name: TitleField;
    location_description: RichTextField;
    location_latitude: NumberField;
    location_longitude: NumberField;
}

export interface IMapSlide extends IBaseSlide {
    slide_map: SelectField;
    locations: Location[];
}

export interface MapSlideProps {
    content: IMapSlide;
}

/**
 * An interactive map slide
 */
export default function MapSlide(props: MapSlideProps): ReactElement {
    const mapService = useRef<MapService | null>(null);
    const [current, setCurrent] = useState<number | null>(() =>
        props.content.locations.length > 0 ? 0 : null
    );

    /**
     * Goes to a specific location
     * @param position - The location latitude and longitude
     */
    function goToLocation(index: number, position: LngLatLike): void {
        mapService.current?.map.flyTo({ center: position, curve: 1, zoom: 12 });
        setCurrent(index);
    }

    /**
     * Gets the first location (if there's any) position to set the map center
     * @returns The longitude and latitude of the first location
     */
    const getFirstLocationCenter = useCallback((): LngLatLike | undefined => {
        if (!props.content.locations || props.content.locations.length === 0) return undefined;

        const first = props.content.locations[0];
        return [Number(first.location_longitude), Number(first.location_latitude)];
    }, [props.content.locations]);

    useEffect(() => {
        mapService.current = new MapService(
            {
                center: getFirstLocationCenter(),
                style: props.content.slide_map
                    ? camelCase(props.content.slide_map as string)
                    : undefined
            },
            props.content.dark_theme_enabled
        );
    }, [props.content, getFirstLocationCenter]);

    return (
        <BaseSlide content={props.content} className={styles.mapSlide}>
            <div className={styles.map} id="map" />

            <div className={styles.locations}>
                {props.content.locations.length > 0 &&
                    props.content.locations.map((x, i) => (
                        <button
                            key={`location_${i}`}
                            {...className({ [styles.current]: i === current })}
                            style={{
                                backgroundImage: x.location_picture
                                    ? `url(${x.location_picture.url})`
                                    : undefined
                            }}
                            onClick={() =>
                                goToLocation(i, [
                                    Number(x.location_longitude),
                                    Number(x.location_latitude)
                                ])
                            }
                        >
                            <span>{x.location_name[0].text}</span>
                        </button>
                    ))}
            </div>

            {current !== null && props.content.locations[current] && (
                <EdgeBox boxPosition={EdgeBoxPosition.Right}>
                    <div
                        key={props.content.locations[current].location_name[0].text}
                        className={styles.locationDetail}
                    >
                        <div
                            className={styles.detailHeader}
                            style={{
                                backgroundImage: props.content.locations[current].location_picture
                                    ? `url(${props.content.locations[current].location_picture.url})`
                                    : undefined
                            }}
                        />

                        <div className={styles.detailContent}>
                            <h3 className="title-medium">
                                {props.content.locations[current].location_name[0].text}
                            </h3>

                            <div
                                className="body-text-small"
                                dangerouslySetInnerHTML={{
                                    __html: PrismicDOM.RichText.asHtml(
                                        props.content.locations[current].location_description
                                    )
                                }}
                            />
                        </div>
                    </div>
                </EdgeBox>
            )}
        </BaseSlide>
    );
}
