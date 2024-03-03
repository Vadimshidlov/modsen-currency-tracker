import React, { ChangeEvent, Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@/components/pages/BankCard/MapController/MapController.scss";
import { connect } from "react-redux";
import Text from "@/components/pages/TimelinePage/Text/Text";
import SearchSvg from "@/assets/svg/bank-card/search-svgrepo-com.svg";
import { RootStateType } from "@/store/reducers";
import {
    successAuthUserLocation,
    errorAuthUserLocation,
} from "@/store/action-creators/authUserLocation";
import Map from "@/components/pages/BankCard/Map/Map";
import { MapControllerPropsType, MapControllerStateType } from "@/types/BankCardPageTypes/types";
import SearchCurrency from "@/components/pages/BankCard/SerachCurrency/SerachCurrency";
import { handleUserAuthLocation } from "@/utils/map/handleUserAuthLocation";

class MapController extends Component<MapControllerPropsType, MapControllerStateType> {
    constructor(props: MapControllerPropsType) {
        super(props);

        this.state = {
            searchCurrency: "",
            selectedCurrency: "",
        };

        this.handleSearchCurrencyChange = this.handleSearchCurrencyChange.bind(this);
        this.handleSelectCurrency = this.handleSelectCurrency.bind(this);
        this.handleResetSelectedCurrency = this.handleResetSelectedCurrency.bind(this);
    }

    componentDidMount() {
        this.handleUserAuthLocation();
    }

    handleUserAuthLocation() {
        const {
            successAuthUserLocation: onSuccessAuthUserLocation,
            errorAuthUserLocation: onErrorAuthUserLocation,
        } = this.props;

        handleUserAuthLocation({
            onSuccess: onSuccessAuthUserLocation,
            onError: onErrorAuthUserLocation,
        });
    }

    handleSearchCurrencyChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;

        this.setState({
            searchCurrency: value,
        });
    }

    handleSelectCurrency(value: string) {
        this.setState({
            searchCurrency: "",
            selectedCurrency: value,
        });
    }

    handleResetSelectedCurrency() {
        this.setState({
            selectedCurrency: "",
        });
    }

    render() {
        const { searchCurrency, selectedCurrency } = this.state;
        const { mapData, userLocationData, theme } = this.props;
        const { userLgt, userLtt } = userLocationData;

        return (
            <>
                <div
                    className={
                        theme === "Light"
                            ? "currency-form__container light"
                            : "currency-form__container"
                    }
                >
                    <Text className="currency-input__title">Search currency in the bank</Text>
                    <div className="currency-input__container">
                        <SearchCurrency
                            onSearchCurrencyValue={this.handleSearchCurrencyChange}
                            handleSelectCurrency={this.handleSelectCurrency}
                            searchCurrencyValue={searchCurrency}
                        />
                        <SearchSvg className="currency-input__icon" />
                    </div>
                    <div className="currency-form__selected-currency selected-currency">
                        {selectedCurrency && (
                            <div className="selected-currency__container">
                                <Text className="selected-currency-title">
                                    Selected currency: {selectedCurrency}
                                </Text>
                                <button
                                    className="selected-currency__reset-button"
                                    onClick={this.handleResetSelectedCurrency}
                                >
                                    Reset
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <Map
                    selectedCurrency={selectedCurrency}
                    markersData={mapData}
                    userLgt={userLgt}
                    userLtt={userLtt}
                />
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    mapData: state.mapData.mapData,
    userLocationData: state.userLocation,
    theme: state.theme.theme,
});

export default connect(mapStateToProps, { successAuthUserLocation, errorAuthUserLocation })(
    MapController,
);
