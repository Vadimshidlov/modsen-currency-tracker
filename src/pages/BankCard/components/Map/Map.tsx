import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { MapPropsType, MapStateType } from "@/types/BankCardPageTypes";
import Loader from "@/components/Loader/index";

import { addMapMarker, isInRadius, throttle } from "@/utils/map/index";
import { BanksDataType } from "@/types";
import { mockBanksApiData } from "@/store/currency-data/index";

const THROTTLE_DELAY = 2000;
const MAPBOXGL_STYLES_LINK = "mapbox://styles/mapbox/streets-v12";
let initialUserLng: number = 30.1956;
let initialUserLat: number = 55.1926;

class Map extends Component<MapPropsType, MapStateType> {
    private mapRef: React.RefObject<HTMLDivElement>;

    private map: mapboxgl.Map | null;

    private markers: mapboxgl.Marker[];

    private secondMarkers: BanksDataType[];

    private INITIAL_MAP_ZOOM: number = 12.5;

    private MARKERS_MAP_RADIUS: number = 0.09;

    constructor(props: MapPropsType) {
        super(props);

        this.mapRef = React.createRef<HTMLDivElement | null>();
        this.map = null;

        this.state = {
            isLoading: false,
            lng: initialUserLng,
            lat: initialUserLat,
            zoom: this.INITIAL_MAP_ZOOM,
            isUserLocationAuth: false,
        };

        this.markers = [];
        this.secondMarkers = mockBanksApiData;
        this.removeMarkers = this.removeMarkers.bind(this);
        this.updateCurrentMarkers = this.updateCurrentMarkers.bind(this);
        this.handleGoHome = this.handleGoHome.bind(this);
    }

    static getDerivedStateFromProps(nextProps: MapPropsType, prevState: MapStateType) {
        if (!prevState.isUserLocationAuth && nextProps.userLgt !== 0 && nextProps.userLtt !== 0) {
            const { userLgt, userLtt } = nextProps;

            initialUserLng = userLgt;
            initialUserLat = userLtt;

            return {
                lng: userLgt,
                lat: userLtt,
                isUserLocationAuth: true,
            };
        }

        return null;
    }

    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

        this.buildMap();
    }

    componentDidUpdate(prevProps: MapPropsType) {
        const { selectedCurrency } = this.props;

        if (prevProps.selectedCurrency !== selectedCurrency) {
            this.removeMarkers();
            this.updateCurrentMarkers();
        }
    }

    componentWillUnmount() {
        if (this.map) {
            this.map.remove();
        }
    }

    handleGoHome() {
        this.map.flyTo({ center: [initialUserLng, initialUserLat], zoom: this.INITIAL_MAP_ZOOM });
        this.updateCurrentMarkers();
    }

    buildMap() {
        if (!this.mapRef.current) return;

        const { lng, lat, zoom } = this.state;
        const throttleUpdate = throttle(this.updateCurrentMarkers, THROTTLE_DELAY);

        this.setState({
            isLoading: true,
        });

        this.map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: MAPBOXGL_STYLES_LINK,
            center: [lng, lat],
            zoom,
        });

        this.addInitialMarkers();

        this.map.on("move", () => {
            this.setState({
                lng: +this.map.getCenter().lng.toFixed(4),
                lat: +this.map.getCenter().lat.toFixed(4),
                zoom: +this.map.getZoom().toFixed(2),
            });

            throttleUpdate();
        });

        this.map.on("load", () => {
            this.setState({
                isLoading: false,
            });
        });
    }

    addInitialMarkers() {
        const { markersData } = this.props;

        markersData.forEach((markerItem) => {
            addMapMarker(markerItem, this.markers, this.map);
        });

        if (this.secondMarkers.length !== 0) {
            const { lng, lat } = this.state;

            this.secondMarkers.forEach((markerItemTwo) => {
                const { gps_y, gps_x } = markerItemTwo;

                if (isInRadius(+gps_y, +gps_x, lng, lat, this.MARKERS_MAP_RADIUS)) {
                    addMapMarker(markerItemTwo, this.markers, this.map);
                }
            });
        }
    }

    updateCurrentMarkers() {
        this.removeMarkers();

        const { selectedCurrency, markersData } = this.props;
        const { lng, lat } = this.state;

        markersData.forEach((markerItem) => {
            if (
                (markerItem.currency?.includes(selectedCurrency) || selectedCurrency === "") &&
                isInRadius(+markerItem.gps_y, +markerItem.gps_x, lng, lat, this.MARKERS_MAP_RADIUS)
            ) {
                addMapMarker(markerItem, this.markers, this.map);
            }
        });

        if (this.secondMarkers.length !== 0) {
            this.secondMarkers.forEach((markerItemTwo) => {
                if (
                    (markerItemTwo.currency?.includes(selectedCurrency) ||
                        selectedCurrency === "") &&
                    isInRadius(
                        +markerItemTwo.gps_y,
                        +markerItemTwo.gps_x,
                        lng,
                        lat,
                        this.MARKERS_MAP_RADIUS,
                    )
                ) {
                    addMapMarker(markerItemTwo, this.markers, this.map);
                }
            });
        }
    }

    removeMarkers() {
        this.markers.forEach((markerItem) => markerItem.remove());
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div className="map__container">
                <button className="map__button" onClick={this.handleGoHome}>
                    Go home
                </button>
                <div className="map" ref={this.mapRef}>
                    {isLoading ? <Loader /> : null}
                </div>
            </div>
        );
    }
}

export default Map;
