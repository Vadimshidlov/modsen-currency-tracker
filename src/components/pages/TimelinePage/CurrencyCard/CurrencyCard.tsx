import React, { Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import { getCurrencyIcon } from "@/utils/getCurrencyIcon";
import "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard";

export type CurrencyCardPropsType = {
    currencyCode: string;
    currencyValue: number;
};

export default class CurrencyCard extends Component<CurrencyCardPropsType> {
    render() {
        const { currencyCode, currencyValue } = this.props;

        const fixedValue = currencyValue.toFixed(2);

        const { CurrencyIcon, currencyTitle } = getCurrencyIcon(currencyCode);

        return (
            <button className="currency-card__container">
                <CurrencyIcon className="currency-card__icon" />
                <div className="currency-card__info">
                    <Text className="currency-card__titile">{currencyTitle}</Text>
                    <Text className="currency-card__percent">{`R$ ${fixedValue}`}</Text>
                </div>
            </button>
        );
    }
}
