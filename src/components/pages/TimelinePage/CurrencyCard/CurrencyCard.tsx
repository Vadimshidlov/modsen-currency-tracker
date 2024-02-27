import React, { Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import { getCurrencyIcon } from "@/utils/getCurrencyIcon";
import "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard.scss";

export type CurrencyCardPropsType = {
    currencyCode: string;
};

export default class CurrencyCard extends Component<CurrencyCardPropsType> {
    render() {
        const { currencyCode } = this.props;
        const { CurrencyIcon, currencyTitle } = getCurrencyIcon(currencyCode);

        return (
            <button className="chart-card__container">
                <CurrencyIcon className="chart-card__icon" />
                <div className="chart-card__info">
                    <Text className="chart-card__titile">{currencyTitle}</Text>
                    <Text className="chart-card__percent">{currencyCode}</Text>
                    {/* <Text className="currency-card__percent">{`R$ ${fixedValue}`}</Text> */}
                </div>
            </button>
        );
    }
}
