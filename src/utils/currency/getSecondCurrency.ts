import { CurrencyType } from "@/store/types/types";
import { getCurrencyTitleWithCode } from "@/utils/currency/getCurrencyWithCode";

export const getSecondCurrency = (currencyData: CurrencyType, currentCurrency: string) => {
    const secondCurrency = {
        secondCurrencyCode: "",
        secondCurrencyValue: 0,
        secondCurrencyTitle: "",
    };

    for (const key in currencyData.data) {
        if (key !== currentCurrency) {
            const { code } = currencyData.data[key];
            const { value } = currencyData.data[key];
            const title = getCurrencyTitleWithCode(code);

            secondCurrency.secondCurrencyCode = code;
            secondCurrency.secondCurrencyValue = value;
            secondCurrency.secondCurrencyTitle = title;
        }
    }

    return secondCurrency;
};
