import React from "react";
import Text from "@/components/Text/Text";
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import "@/components/CurrencyStocks/CurrencyStocks.scss";

export default function CurrencyStocks() {
    return (
        <div className="stocks__container">
            <Text className="stocks__title title">Stocks</Text>
            <div className="title__border" />
            <div className="stocks__items">
                {[0, 1].map(() => (
                    <CurrencyCard />
                ))}
            </div>
        </div>
    );
}
