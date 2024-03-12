import React from "react";
import Text from "@/pages/HomePage/components/Text/index";
import "@/pages/HomePage/components/CurrencyCard/CurrencyCard.scss";
import BovespaIcon from "@/assets/svg/stocks/bovespa-icon.svg";
import IfixIcon from "@/assets/svg/stocks/ifix-icon.svg";
import { CurrencyStockPropsType } from "@/types/HomePageTypes";

export default function StockCard({ stockCode, value }: CurrencyStockPropsType) {
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
