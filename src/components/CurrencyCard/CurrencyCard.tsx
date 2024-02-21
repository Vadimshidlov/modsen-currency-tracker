import React from "react";
import Text from "@/components/Text/Text";
import DollarIcon from "@/assets/svg/currency/dollar-icon.svg";
import "@/components/CurrencyCard/CurrencyCard.scss";

export default function CurrencyCard() {
    return (
        <div className="currency-card__containter">
            <DollarIcon width={80} height={80} />
            <div className="currency-card__info">
                <Text className="currency-card__titile">Bovespa Index</Text>
                <Text className="currency-card__percent">0.15%</Text>
            </div>
        </div>
    );
}
