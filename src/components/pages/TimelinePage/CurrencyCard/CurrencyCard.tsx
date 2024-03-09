import React, { Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import { getCurrencyIcon } from "@/utils/currency/getCurrencyIcon";
import "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard.scss";
import { CurrencyCardPropsType } from "@/types/TimeLinePageTypes/types";

export default class CurrencyCard extends Component<CurrencyCardPropsType> {
    render() {
        const { currencyCode, theme } = this.props;
        const { CurrencyIcon, currencyTitle } = getCurrencyIcon(currencyCode);

        return (
            <div
                className={
                    theme === "Light" ? "chart-card__container light" : "chart-card__container"
                }
            >
                <CurrencyIcon className="chart-card__icon" />
                <div className="chart-card__info">
                    <Text className="chart-card__titile">{currencyTitle}</Text>
                    <Text className="chart-card__percent">{currencyCode}</Text>
                </div>
            </div>
        );
    }
}
