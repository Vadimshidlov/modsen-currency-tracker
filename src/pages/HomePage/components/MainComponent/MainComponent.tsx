import React, { useEffect } from "react";
import LastUpdate from "@/pages/HomePage/components/LastUpdate/index";
import "@/pages/HomePage/components/MainComponent/MainComponent.scss";
import CurrencyStocks from "@/pages/HomePage/components/CurrencyStocks/index";
import CurrencyQoutes from "@/pages/HomePage/components/CurrencyQoutes/index";
import { useActions } from "@/store/hooks/index";
import ErrorBoundary from "@/components/ErrorBoundary/index";

export default function MainComponent() {
    const { getCurrency } = useActions();

    useEffect(() => {
        getCurrency();
    }, [getCurrency]);

    return (
        <main className="main-block main-block__container">
            <LastUpdate />
            <ErrorBoundary>
                <CurrencyStocks />
                <CurrencyQoutes />
            </ErrorBoundary>
        </main>
    );
}
