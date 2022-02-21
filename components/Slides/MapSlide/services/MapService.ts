import { Map as MapboxMap, FlyToOptions, LngLatLike, MapboxOptions, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MappedStyles {
    [key: string]: string;
}

export default class MapService {
    private _map: MapboxMap;

    private readonly markers: Map<string, Marker>;

    private readonly styles: MappedStyles = {
        streets: "streets-v11",
        outdoors: "outdoors-v11",
        light: "light-v10",
        dark: "dark-v10",
        satellite: "satellite-v9",
        satelliteStreets: "satellite-streets-v11",
        navigationDay: "navigation-day-v1",
        navigationNight: "navigation-night-v1"
    };

    get map(): MapboxMap {
        return this._map;
    }

    constructor(private readonly options?: Partial<MapboxOptions>, private readonly darkMode?: boolean) {
        this._map = this.setMap();
        this.markers = new Map<string, Marker>();
    }

    // #region Public methods

    /**
     * Adds a marker to the map
     * @param id - The marker ID
     * @param position - The marker position
     */
    addMarker(id: string, position: LngLatLike): void {
        const marker = new Marker().setLngLat(position).addTo(this._map);
        this.markers.set(id, marker);
    }

    /**
     * Fly to a specific location
     * @param options - The method options
     */
    flyToLocation(options: FlyToOptions): void {
        this._map = this._map.flyTo(options);
    }

    /**
     * Removes al markers and releases all map resources
     */
    clear(): void {
        this.markers.forEach(marker => marker.remove());
        this.markers.clear();
        this._map.remove();
    }

    // #endregion

    // #region Private methods

    /**
     * Sets a basic mapbox map
     * @returns The map object
     * @see {@link https://docs.mapbox.com/mapbox-gl-js/example/simple-map/}
     */
    private setMap(): MapboxMap {
        const defaultMap = this.darkMode ? "dark" : "light";

        return new MapboxMap({
            ...this.options,
            accessToken: String(process.env.NEXT_PUBLIC_MAPBOX_TOKEN),
            container: this.options?.container ?? "map",
            center: this.setCenter(),
            zoom: this.options?.zoom ?? 12,
            style: `mapbox://styles/mapbox/${this.styles[this.options?.style?.toString() ?? defaultMap]}?optimize=true`
        });
    }

    /**
     * Sets the initial center of the map
     * @returns An array containing longitude and latitude
     */
    private setCenter(): LngLatLike {
        const center = this.options?.center as number[];
        const defaultCenter = [-60.65355938114498, -32.93958537722223]; // Rosario
        return (center.every(x => typeof x === "number") ? center : defaultCenter) as LngLatLike;
    }

    // #endregion
}
