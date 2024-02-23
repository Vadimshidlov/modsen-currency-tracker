import React from "react";
import Text from "@/components/Text/Text";
import "@/components/CurrencyCard/CurrencyCard.scss";
import BovespaIcon from "@/assets/svg/stocks/bovespa-icon.svg";
import IfixIcon from "@/assets/svg/stocks/ifix-icon.svg";

export type CurrencyPropsType = {
    stockCode: string;
    value: number;
};

export default function StockCard({ stockCode, value }: CurrencyPropsType) {
    let CurrencyIcon;
    let currencyTitle = "";
    const currencyValue = +value.toFixed(2);

    switch (stockCode) {
        case "BOVESPA_INDEX":
            CurrencyIcon = BovespaIcon;
            currencyTitle = "Bovespa Index";
            break;
        case "IIFIX":
            CurrencyIcon = IfixIcon;
            currencyTitle = "IFIX";
            break;

        default:
            CurrencyIcon = BovespaIcon;
            currencyTitle = "Bovespa Index";
    }

    return (
        <button className="currency-card__container" disabled>
            <CurrencyIcon className="currency-card__icon" />
            <div className="currency-card__info">
                <Text className="currency-card__titile">{currencyTitle}</Text>
                <Text className="currency-card__percent">{`${currencyValue}%`}</Text>
            </div>
        </button>
    );
}
