/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Text from "@/components/Text/Text";
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import "@/components/CurrencyQoutes/CurrencyQoutes.scss";
import { useActions } from "@/store/hooks/useActions";
// import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
// import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
// import { useActions } from "@/store/hooks/useActions";

export default function CurrencyQoutes() {
    // const { currency } = useTypedSelectorHook((state) => state.currency);

    const { getCurrency } = useActions();

    useEffect(() => {
        getCurrency();
    }, []);

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
