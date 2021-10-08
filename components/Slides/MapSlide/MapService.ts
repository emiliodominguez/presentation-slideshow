import mapboxgl, { FlyToOptions, LngLatLike, Map, MapboxOptions } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styleBaseUrl = "mapbox://styles/mapbox/";

export default class MapService {
    private readonly _map: Map;

    private readonly styles: { [key: string]: string } = {
        streets: styleBaseUrl + "streets-v11",
        outdoors: styleBaseUrl + "outdoors-v11",
        light: styleBaseUrl + "light-v10",
        dark: styleBaseUrl + "dark-v10",
        satellite: styleBaseUrl + "satellite-v9",
        satelliteStreets: styleBaseUrl + "satellite-streets-v11",
        navigationDay: styleBaseUrl + "navigation-day-v1",
        navigationNight: styleBaseUrl + "navigation-night-v1"
    };

    get map(): Map {
        return this._map;
    }

    constructor(
        private readonly options?: Partial<MapboxOptions>,
        private readonly darkMode?: boolean
    ) {
        this._map = this.setMap();
    }

    /**
     * Sets a basic mapbox map
     * @returns The map object
     * @see {@link https://docs.mapbox.com/mapbox-gl-js/example/simple-map/}
     */
    private setMap(): Map {
        return new mapboxgl.Map({
            ...this.options,
            accessToken: String(process.env.NEXT_PUBLIC_MAPBOX_TOKEN),
            container: this.options?.container ?? "map",
            center: this.setCenter(),
            zoom: this.options?.zoom ?? 12,
            style: this.options?.style
                ? this.styles[this.options.style as string]
                : this.styles[this.darkMode ? "dark" : "light"]
        });
    }

    /**
     * Sets the initial center of the map
     * @returns An array containing longitude and latitude
     */
    private setCenter(): LngLatLike {
        const defaultCenter = [-60.65355938114498, -32.93958537722223]; // Endava's office in Rosario

        if (
            this.options?.center &&
            (this.options?.center as number[]).length > 0 &&
            (this.options?.center as number[])[0] &&
            (this.options?.center as number[])[1]
        ) {
            return this.options.center;
        }

        return defaultCenter as LngLatLike;
    }
}
