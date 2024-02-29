import React, { ChangeEvent, Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@/components/pages/BankCard/MapController/MapController.scss";
import { connect } from "react-redux";
import Text from "@/components/pages/TimelinePage/Text/Text";
import SearchSvg from "@/assets/svg/bank-card/search-svgrepo-com.svg";
import { RootStateType } from "@/store/reducers";
import Map from "@/components/pages/BankCard/Map/Map";
import { MapControllerPropsType, MapControllerStateType } from "@/types/BankCardPageTypes/types";

class MapController extends Component<MapControllerPropsType, MapControllerStateType> {
    constructor(props: MapControllerPropsType) {
        super(props);

        this.state = {
            searchCurrency: "",
            selectedCurrency: "",
        };

        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }

    componentDidMount() {}

    handleCurrencyChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;

        this.setState({
            searchCurrency: value,
        });
    }

    render() {
        const { searchCurrency, selectedCurrency } = this.state;
        const { currency, mapData } = this.props;
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
                            autoComplete="off"
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
                <Map selectedCurrency={selectedCurrency} markersData={mapData} />
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    currency: state.currency,
    mapData: state.mapData.mapData,
});

export default connect(mapStateToProps, {})(MapController);
