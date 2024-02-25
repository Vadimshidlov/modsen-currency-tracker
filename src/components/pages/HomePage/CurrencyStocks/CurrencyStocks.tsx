import React from "react";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/CurrencyStocks/CurrencyStocks.scss";
import ModalWindow from "@/components/pages/HomePage/ModalWindow/ModalWindow";
import { mockStockData } from "@/store/currency-data/mockStockData";
import StockCard from "@/components/pages/HomePage/StockCard/StockCard";

export default function CurrencyStocks() {
    return (
        <div className="stocks__container">
            <Text className="stocks__title title">Stocks</Text>
            <div className="title__border" />
            <div className="stocks__items">
                {mockStockData.map((stockItem) => (
                    <StockCard
                        stockCode={stockItem.stockCode}
                        value={stockItem.stockValue}
                        key={stockItem.stockCode}
                    />
                ))}
            </div>
            <ModalWindow isOpen={false} />
        </div>
    );
}
