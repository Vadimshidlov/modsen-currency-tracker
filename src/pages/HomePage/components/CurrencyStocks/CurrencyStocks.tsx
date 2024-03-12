import React from "react";
import Text from "@/pages/HomePage/components/Text/index";
import "@/pages/HomePage/components/CurrencyStocks/CurrencyStocks.scss";
import ModalWindow from "@/pages/HomePage/components/ModalWindow/index";
import { mockStockData } from "@/store/currency-data/index";
import StockCard from "@/pages/HomePage/components/StockCard/index";
import { useTypedSelectorHook } from "@/store/hooks/index";
import { selectTheme } from "@/store/selectors/index";

export default function CurrencyStocks() {
    const { theme } = useTypedSelectorHook(selectTheme);

    return (
        <section className={theme === "Light" ? "stocks__container light" : "stocks__container"}>
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
        </section>
    );
}
