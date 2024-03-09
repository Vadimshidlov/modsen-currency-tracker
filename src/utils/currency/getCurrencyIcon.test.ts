import { getCurrencyIcon } from "@/utils/currency/getCurrencyIcon";

describe("getCurrencyIcon function tests", () => {
    it("should return correct title for passed currcency", () => {
        const { currencyTitle: usdTitle } = getCurrencyIcon("USD");
        const { currencyTitle: eurTitle } = getCurrencyIcon("EUR");
        const { currencyTitle: btcTitle } = getCurrencyIcon("BTC");

        expect(usdTitle).toBe("Commercial Dollar");
        expect(eurTitle).toBe("Euro");
        expect(btcTitle).toBe("Bitcoin");
    });

    it("should return correct type of returned value for passed currcency", () => {
        const { currencyTitle: usdTitle } = getCurrencyIcon("USD");

        expect(typeof usdTitle).toBe("string");
    });
});
