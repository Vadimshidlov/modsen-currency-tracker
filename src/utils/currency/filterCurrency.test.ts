import { CurrencyType } from "@/store/types";
import { filterCurrency } from "@/utils/currency/index";

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

        const filteredData = filterCurrency(currencyData);

        expect(Object.keys(filteredData)).toEqual(["USD", "JPY", "EUR", "CAD"]);

        expect(filteredData.USD.value).toBe(1.23);
        expect(filteredData.EUR.value).toBe(1.5);
        expect(filteredData.CAD.value).toBe(1.23);

        expect(filteredData.GBP).toBeFalsy();
    });

    it("should return an empty object if all currencies are invalid", () => {
        const currencyData: CurrencyType = {
            meta: {
                last_updated_at: "",
            },
            data: {
                GBP: {
                    code: "GBP",
                    value: 1.23,
                },
                RUB: {
                    code: "RUB",
                    value: 3,
                },
            },
        };

        const filteredData = filterCurrency(currencyData);

        expect(filteredData).toEqual({});
    });
});
