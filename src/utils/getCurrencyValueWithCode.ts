import { ICurrency } from "@/store/reducers/latestCurrencyReducer";

export const getCurrencyValueWithCode = (currencyData: ICurrency, currencyCode: string) => {
    let currencyValue = 0;

    for (const key in currencyData.data) {
        if (key === currencyCode) {
            const { value } = currencyData.data[key];

            currencyValue = value;
        }
    }

    return currencyValue;
};
