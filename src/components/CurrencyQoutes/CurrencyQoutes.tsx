import React from "react";
import Text from "@/components/Text/Text";
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import "@/components/CurrencyQoutes/CurrencyQoutes.scss";

export default function CurrencyQoutes() {
    return (
        <div className="quotes__container">
            <Text className="quotes__title title">Quotes</Text>
            <div className="title__border" />
            <div className="quotes__items">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <CurrencyCard />
                ))}
            </div>
        </div>
    );
}
