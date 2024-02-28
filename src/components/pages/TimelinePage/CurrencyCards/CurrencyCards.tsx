import React, { Component } from "react";
import "@/components/pages/TimelinePage/CurrencyCards/CurrencySelect.scss";
import { getCurrencyTitleWithCode } from "@/utils/getCurrencyWithCode";
import SelectIcon from "@/assets/svg/select-vector.svg";
import { ICurrency } from "@/store/reducers/latestCurrencyReducer";
// import { getCurrencyValueWithCode } from "@/utils/getCurrencyValueWithCode";
import CurrencyCard from "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard";

export type CurrencyCardsPropsType = {
    currencyData: ICurrency;
    selectedCurrencyCode: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type CurrencyCardsStateType = object;

export default class CurrencyCards extends Component<
    CurrencyCardsPropsType,
    CurrencyCardsStateType
> {
    render() {
        const { onChange } = this.props;
        const { currencyData, selectedCurrencyCode } = this.props;
        // const currencyValue = getCurrencyValueWithCode(currencyData, selectedCurrencyCode);

        return (
            <>
                <div className="currency-chart__select-container">
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
                <CurrencyCard currencyCode={selectedCurrencyCode} />
            </>
        );
    }
}
