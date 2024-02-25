import React, { useEffect } from "react";
import LastUpdate from "@/components/pages/HomePage/LastUpdate/LastUpdate";
import "@/components/pages/HomePage/MainComponent/MainComponent.scss";
import CurrencyStocks from "@/components/pages/HomePage/CurrencyStocks/CurrencyStocks";
import CurrencyQoutes from "@/components/pages/HomePage/CurrencyQoutes/CurrencyQoutes";
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
