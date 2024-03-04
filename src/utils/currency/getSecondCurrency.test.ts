import { CurrencyType } from "@/store/types/types";
import { getSecondCurrency } from "@/utils/currency/getSecondCurrency";

const currencyData: CurrencyType = {
    meta: {
        last_updated_at: "",
    },
    data: {
        USD: {
            code: "USD",
            value: 1.23,
        },
        JPY: {
            code: "JPY",
            value: 1,
        },
        EUR: {
            code: "EUR",
            value: 1.5,
        },
        CAD: {
            code: "CAD",
            value: 1.23,
        },
        BYN: {
            code: "BYN",
            value: 3.23,
        },
    },
};

describe("getSecondCurrency function", () => {
    it("should return correct code for passed value", () => {
        const { secondCurrencyCode: currencyCodeValueUSD } = getSecondCurrency(currencyData, "USD");
        const { secondCurrencyCode: currencyCodeValueEUR } = getSecondCurrency(currencyData, "EUR");
        const { secondCurrencyCode: currencyCodeValueCAD } = getSecondCurrency(currencyData, "CAD");

        expect(currencyCodeValueUSD).not.toBe("USD");
        expect(typeof currencyCodeValueUSD).toBe("string");

        expect(currencyCodeValueEUR).not.toBe("EUR");
        expect(typeof currencyCodeValueEUR).toBe("string");

        expect(currencyCodeValueCAD).not.toBe("CAD");
        expect(typeof currencyCodeValueCAD).toBe("string");
    });
});
