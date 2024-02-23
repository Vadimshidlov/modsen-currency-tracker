import React from "react";
import Text from "@/components/Text/Text";
import "@/components/CurrencyStocks/CurrencyStocks.scss";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import { mockStockData } from "@/store/currency-data/mockStockData";
import StockCard from "@/components/StockCard/StockCard";

export default function CurrencyStocks() {
    return (
        <div className="stocks__container">
            <Text className="stocks__title title">Stocks</Text>
            <div className="title__border" />
            <div className="stocks__items">
                {mockStockData.map((stockItem) => (
                    <StockCard stockCode={stockItem.stockCode} value={stockItem.stockValue} />
                ))}
            </div>
            <ModalWindow isOpen={false} />
        </div>
    );
}
