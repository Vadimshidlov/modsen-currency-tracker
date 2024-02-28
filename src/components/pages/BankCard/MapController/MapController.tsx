import React, { ChangeEvent, Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@/components/pages/BankCard/MapController/MapController.scss";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import Text from "@/components/pages/TimelinePage/Text/Text";
import SearchSvg from "@/assets/svg/bank-card/search-svgrepo-com.svg";
import { RootStateType } from "@/store/reducers";
import { IcurrentCurrencyState } from "@/store/reducers/latestCurrencyReducer";

export type MarkersDataType = {
    name: string;
    color: string;
    lngLat: [number, number];
    currency?: string[];
};

export type MapControllerPropsType = {
    currency: IcurrentCurrencyState;
};

export type MapControllerStateType = {
    lng: number;
    lat: number;
    zoom: number;
    searchCurrency: string;
    selectedCurrency: string;
};

const markersData: MarkersDataType[] = [
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.25832932037794, 55.17066236037809],
    },

    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.25688582599344, 55.17330044469039],
    },
    {
        name: "Belarusbank",
        color: "#4FB43E",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.238986495625703, 55.167117159658304],
    },
    {
        name: "Belarusbank",
        color: "#4FB43E",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.236965603487413, 55.17709238503239],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.22440720234231, 55.15342807809873],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.23913084506415, 55.19868308023307],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.232490770895478, 55.18660999283625],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.22310805739626, 55.17301004226588],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.210323860044404, 55.161902017973205],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.206203986942388, 55.164059349627614],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.21015219866515, 55.16690292666946],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.214615394525673, 55.172001246656315],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.214443733146425, 55.18111777018812],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.20722025137723, 55.18447910795412],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.204465299931684, 55.181973819577],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.205942276181293, 55.19345601741293],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.205578127405285, 55.200245492527365],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.194163079556713, 55.19554812761712],
    },
    {
        name: "Belarusbank",
        color: "",
        // lngLat: [30.204399, 55.181948],
        lngLat: [30.149359459572256, 55.175261014584464],
        currency: [],
    },
];

class MapController extends Component<MapControllerPropsType, MapControllerStateType> {
    private mapRef: React.RefObject<HTMLDivElement | null>;

    private map: mapboxgl.Map | null;

    private markers: mapboxgl.Marker[];

    constructor(props: MapControllerPropsType) {
        super(props);

        this.mapRef = React.createRef<HTMLDivElement | null>();
        this.map = null;

        this.state = {
            /*
            // Minsk
            lng: 27.5619,
            lat: 53.9023, */
            lng: 30.1956,
            lat: 55.1926,
            zoom: 12.5,
            searchCurrency: "",
            selectedCurrency: "",
        };

        this.markers = [];
        this.removeMarkers = this.removeMarkers.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }

    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;
        this.buildMap();
    }

    componentWillUnmount() {
        if (this.map) {
            this.map.remove();
        }
    }

    handleCurrencyChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;

        this.setState({
            searchCurrency: value,
        });
    }

    buildMap() {
        console.log("buildMap");

        const { lng, lat, zoom } = this.state;
        this.map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom,
        });

        markersData.forEach((markerItem) => {
            const popup = new mapboxgl.Popup({
                offset: 35,
            }).setHTML(`<h2>${markerItem.name}</p>`);

            const marker = new mapboxgl.Marker()
                .setLngLat([+markerItem.lngLat[0].toFixed(4), +markerItem.lngLat[1].toFixed(4)])
                .setPopup(popup)
                .addTo(this.map);

            this.markers.push(marker);
        });

        this.map.on("move", () => {
            this.setState({
                lng: +this.map.getCenter().lng.toFixed(4),
                lat: +this.map.getCenter().lat.toFixed(4),
                zoom: +this.map.getZoom().toFixed(2),
            });
        });

        this.map.on("load", () => {
            console.log("I am Rendered");
        });
    }

    removeMarkers() {
        this.markers.forEach((markerItem) => markerItem.remove());
    }

    render() {
        const { searchCurrency, selectedCurrency } = this.state;
        const { currency } = this.props;
        const { currency: currencyData } = currency;
        const { data } = currencyData;

        return (
            <>
                <div className="currency-form__container">
                    <Text className="currency-input__title">Search currency in the bank</Text>
                    <div className="currency-input__container">
                        <input
                            id="currency-input"
                            type="text"
                            className="currency-input__input"
                            placeholder="Сurrency search..."
                            value={searchCurrency}
                            onChange={this.handleCurrencyChange}
                        />
                        <div className="currency-input__result">
                            {searchCurrency &&
                                Object.keys(data)
                                    .filter((key) =>
                                        key.toLowerCase().includes(searchCurrency.toLowerCase()),
                                    )
                                    .map((currencyKey) => (
                                        <button
                                            className="currency-input__result-item"
                                            onClick={() => {
                                                this.setState({
                                                    searchCurrency: "",
                                                    selectedCurrency: currencyKey,
                                                });

                                                console.log(currencyKey);
                                            }}
                                            key={currencyKey}
                                        >
                                            {currencyKey}
                                        </button>
                                    ))}
                        </div>
                        <SearchSvg className="currency-input__icon" />
                    </div>
                    <div className="currency-form__selected-currency selected-currency">
                        {selectedCurrency && (
                            <Text className="selected-currency-title">
                                Selected currency: {selectedCurrency}
                            </Text>
                        )}
                    </div>
                </div>

                <div>
                    <div className="map__container" ref={this.mapRef} />
                </div>
                <button onClick={this.removeMarkers}>REMOVE</button>
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    currency: state.currency,
});

export default connect(mapStateToProps, {})(MapController);
