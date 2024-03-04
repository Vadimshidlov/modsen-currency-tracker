import React, { Component } from "react";
import { connect } from "react-redux";
import "@/components/pages/TimelinePage/CurrencyCards/CurrencySelect.scss";
import { getCurrencyTitleWithCode } from "@/utils/currency/getCurrencyTitleWithCode";
import SelectIcon from "@/assets/svg/select-vector.svg";
import CurrencyCard from "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard";
import { CurrencyCardsPropsType, CurrencyCardsStateType } from "@/types/TimeLinePageTypes/types";
import { RootStateType } from "@/store/reducers";

class CurrencyCards extends Component<CurrencyCardsPropsType, CurrencyCardsStateType> {
    render() {
        const { onChange } = this.props;
        const { currencyData, selectedCurrencyCode, theme } = this.props;

        return (
            <>
                <div
                    className={
                        theme === "Light"
                            ? "currency-chart__select-container light"
                            : "currency-chart__select-container"
                    }
                >
                    <select
                        className="currency-chart__select"
                        name="currency-chart-select"
                        value={selectedCurrencyCode}
                        onChange={onChange}
                    >
                        {Object.keys(currencyData.data).map((element) => (
                            <option
                                className="currency-chart-select__option"
                                value={element}
                                key={element}
                            >
                                {getCurrencyTitleWithCode(element)}
                            </option>
                        ))}
                    </select>
                    <div className="currency-chart__icon-container">
                        <SelectIcon className="currency-chart__icon" />
                    </div>
                </div>
                <CurrencyCard currencyCode={selectedCurrencyCode} theme={theme} />
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(CurrencyCards);
