import { ICurrency } from "@/store/reducers/latestCurrencyReducer";

export const getCurrencyValueWithCode = (currencyData: ICurrency, currencyCode: string) => {
    let currencyValue = 0;

    console.log(currencyData, `currencyData`);

    for (const key in currencyData.data) {
        if (key === currencyCode) {
            const { value } = currencyData.data[key];

            currencyValue = value;
        }
    }

    // console.log(currencyValue, `currencyValue from helper`);

    console.log(currencyValue, `currencyValue return from helper`);

    return currencyValue;
};
