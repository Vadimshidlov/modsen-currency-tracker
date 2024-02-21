import React from "react";
import LastUpdate from "@/components/LastUpdate/LastUpdate";
import "@/components/MainComponent/MainComponent.scss";
// import CurrencyCard from "@/components/CurrencyCard/CurrencyCard";
import CurrencyStocks from "@/components/CurrencyStocks/CurrencyStocks";
import CurrencyQoutes from "@/components/CurrencyQoutes/CurrencyQoutes";

export default function MainComponent() {
    return (
        <div className="main-block">
            <LastUpdate />
            <CurrencyStocks />
            <CurrencyQoutes />
            {/* <CurrencyCard /> */}
        </div>
    );
}
