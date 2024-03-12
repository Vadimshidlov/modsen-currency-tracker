import { CurrencyType } from "@/store/types";
import { getCurrencyValueWithCode } from "@/utils/currency/index";

describe("filterCurrency function tests", () => {
    it("should filter the currency data based on a valid currency list", () => {
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

        const currencyValueUSD = getCurrencyValueWithCode(currencyData, "USD");
        const currencyValueEUR = getCurrencyValueWithCode(currencyData, "EUR");
        const currencyValueCAD = getCurrencyValueWithCode(currencyData, "CAD");

        expect(currencyValueUSD).toBe(1.23);
        expect(typeof currencyValueUSD).toBe("number");
        expect(currencyValueCAD).toBe(1.23);
        expect(typeof currencyValueCAD).toBe("number");
        expect(currencyValueEUR).toBe(1.5);
        expect(typeof currencyValueEUR).toBe("number");
    });
});
