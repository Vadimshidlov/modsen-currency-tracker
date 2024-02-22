import { CurrencyDataType, ICurrency } from "@/store/reducers/latestCurrencyReducer";

export const filterCurrency = (currency: ICurrency) => {
    const validCurrencyList = ["AUD", "BTC", "JPY", "CNY", "ARS", "EUR", "AUD", "CAD", "USD"];

    const filteredData = Object.keys(currency.data)
        .filter((key) => validCurrencyList.includes(key))
        .reduce<CurrencyDataType>((obj, key) => {
            const result = obj;
            result[key] = currency.data[key];

            return obj;
        }, {});

    return filteredData;
};
