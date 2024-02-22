import React from "react";
import Text from "@/components/Text/Text";
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import "@/components/CurrencyQoutes/CurrencyQoutes.scss";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function CurrencyQoutes() {
    const { currency } = useTypedSelectorHook((state) => state.currency);

    return (
        <div className="quotes__container">
            <Text className="quotes__title title">Quotes</Text>
            <div className="title__border" />
            <div className="quotes__items">
                {Object.keys(currency.data).map((element) => (
                    <CurrencyCard currencyCode={element} key={element} />
                ))}
            </div>
        </div>
    );
}
