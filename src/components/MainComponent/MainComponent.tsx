import React, { useEffect } from "react";
import LastUpdate from "@/components/LastUpdate/LastUpdate";
import "@/components/MainComponent/MainComponent.scss";
// import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import CurrencyStocks from "@/components/CurrencyStocks/CurrencyStocks";
import CurrencyQoutes from "@/components/CurrencyQoutes/CurrencyQoutes";
import { useActions } from "@/store/hooks/useActions";

export default function MainComponent() {
    const { getCurrency } = useActions();

    useEffect(() => {
        getCurrency();
    }, [getCurrency]);

    return (
        <div className="main-block">
            <LastUpdate />
            <CurrencyStocks />
            <CurrencyQoutes />
            {/* <CurrencyCard /> */}
        </div>
    );
}
