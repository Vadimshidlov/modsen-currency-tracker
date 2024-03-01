import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { MapPropsType, MapStateType } from "@/types/BankCardPageTypes/types";
import Loader from "@/components/pages/TimelinePage/Loader/Loader";

class Map extends Component<MapPropsType, MapStateType> {
    private mapRef: React.RefObject<HTMLDivElement>;

    private map: mapboxgl.Map | null;

    private markers: mapboxgl.Marker[];

    constructor(props: MapPropsType) {
        super(props);

        this.mapRef = React.createRef<HTMLDivElement | null>();
        this.map = null;

        this.state = {
            isLoading: false,
            lng: 30.1956,
            lat: 55.1926,
            zoom: 12.5,
        };

        this.markers = [];
        this.removeMarkers = this.removeMarkers.bind(this);
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

    buildMap() {
        const { lng, lat, zoom } = this.state;

        this.setState({
            isLoading: true,
        });

        this.map = new mapboxgl.Map({
            container: this.mapRef.current,
            // container: this.mapRef.current,
            style: "mapbox://styles/mapbox/streets-v12",
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
            const popup = new mapboxgl.Popup({
                offset: 35,
            }).setHTML(
                `<h2>${markerItem.name}</h2><p>Address: ${markerItem.address}</p><p>Currency: ${markerItem.currency.join(", ")}.</p> `,
            );

            const marker = new mapboxgl.Marker()
                .setLngLat([+markerItem.lngLat[0].toFixed(4), +markerItem.lngLat[1].toFixed(4)])
                .setPopup(popup)
                .addTo(this.map);

            this.markers.push(marker);
        });
    }

    updateCurrentMarkers() {
        const { selectedCurrency, markersData } = this.props;

        markersData.forEach((markerItem) => {
            if (markersData.length !== 0 && markerItem.currency?.includes(selectedCurrency)) {
                const popup = new mapboxgl.Popup({
                    offset: 35,
                }).setHTML(
                    `<h2>${markerItem.name}</h2><p>Address: ${markerItem.address}</p><p>Currency: ${markerItem.currency.join(", ")}.</p> `,
                );

                const marker = new mapboxgl.Marker()
                    // .setLngLat([+markerItem.lngLat[0].toFixed(4), +markerItem.lngLat[1].toFixed(4)])
                    .setLngLat([markerItem.lngLat[0], markerItem.lngLat[1]])
                    .setPopup(popup)
                    .addTo(this.map);

                this.markers.push(marker);
            }
        });
    }

    removeMarkers() {
        this.markers.forEach((markerItem) => markerItem.remove());
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div>
                <div className="map__container" ref={this.mapRef}>
                    {isLoading ? <Loader /> : null}
                </div>
            </div>
        );
    }
}

export default Map;
