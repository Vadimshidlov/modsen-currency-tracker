import React, { useEffect } from "react";
import LastUpdate from "@/components/LastUpdate/LastUpdate";
import "@/components/MainComponent/MainComponent.scss";
import CurrencyStocks from "@/components/CurrencyStocks/CurrencyStocks";
import CurrencyQoutes from "@/components/CurrencyQoutes/CurrencyQoutes";
import { useActions } from "@/store/hooks/useActions";

export default function MainComponent() {
    const { getCurrency } = useActions();

    useEffect(() => {
        getCurrency();
    }, [getCurrency]);

    return (
        <main className="main-block main-block__container">
            <LastUpdate />
            <CurrencyStocks />
            <CurrencyQoutes />
        </main>
    );
}
