import React, { Component } from "react";
import Text from "@/components/Text/index";
import "@/pages/TimelinePage/components/CurrencyCard/CurrencyCard.scss";
import { CurrencyCardPropsType } from "@/types/TimeLinePageTypes";
import { getCurrencyIcon } from "@/utils/currency";

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
