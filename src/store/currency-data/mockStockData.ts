export type MockStockDataType = {
    stockCode: string;
    stockValue: number;
};

export const mockStockData: MockStockDataType[] = [
    {
        stockCode: "BOVESPA_INDEX",
        stockValue: 0.15,
    },
    {
        stockCode: "IIFIX",
        stockValue: 0.15,
    },
];
