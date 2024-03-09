import { CurrencyType } from "@/store/types/types";

export const getCurrencyValueWithCode = (currencyData: CurrencyType, currencyCode: string) => {
    let currencyValue = 0;

    for (const key in currencyData.data) {
        if (key === currencyCode) {
            const { value } = currencyData.data[key];

            currencyValue = value;
        }
    }

    return currencyValue;
};
