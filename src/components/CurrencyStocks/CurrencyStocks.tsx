import React from "react";
import Text from "@/components/Text/Text";
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import "@/components/CurrencyStocks/CurrencyStocks.scss";
import ModalWindow from "@/components/ModalWindow/ModalWindow";

export default function CurrencyStocks() {
    return (
        <div className="stocks__container">
            <Text className="stocks__title title">Stocks</Text>
            <div className="title__border" />
            <div className="stocks__items">
                {[1, 2].map(() => (
                    <CurrencyCard currencyCode="USD" value={0.1555} />
                ))}
            </div>
            <ModalWindow isOpen={false} />
        </div>
    );
}
