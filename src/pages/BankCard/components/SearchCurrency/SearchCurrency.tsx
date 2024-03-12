import React, { Component } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@/store/reducers";
import TextInput from "@/pages/BankCard/components/TextInput/index";
import { SearchCurrencyPropsType, SearchCurrencyStateType } from "@/types/BankCardPageTypes";

class SearchCurrency extends Component<SearchCurrencyPropsType, SearchCurrencyStateType> {
    render() {
        const { handleSelectCurrency, currencyData, searchCurrencyValue, onSearchCurrencyValue } =
            this.props;

        const filteredCurrencyKeys = ["BYN", ...Object.keys(currencyData.currency.data)].filter(
            (key) => key.toLowerCase().includes(searchCurrencyValue.toLowerCase()),
        );

        return (
            <div className="currency-input__container">
                <TextInput
                    id="currency-input"
                    className="currency-input__input"
                    placeholder="Сurrency search..."
                    value={searchCurrencyValue}
                    onChange={onSearchCurrencyValue}
                    autoComplete="off"
                    data-testid="map-search-input"
                />
                <div className="currency-input__result">
                    {searchCurrencyValue &&
                        filteredCurrencyKeys.map((currencyKey) => (
                            <button
                                className="currency-input__result-item"
                                onClick={() => {
                                    handleSelectCurrency(currencyKey);
                                }}
                                key={currencyKey}
                            >
                                {currencyKey}
                            </button>
                        ))}
                    {filteredCurrencyKeys.length === 0 && (
                        <button
                            className="currency-input__result-item"
                            key={String(filteredCurrencyKeys.length)}
                        >
                            Not Found
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    currencyData: state.currency,
});

export default connect(mapStateToProps, {})(SearchCurrency);
