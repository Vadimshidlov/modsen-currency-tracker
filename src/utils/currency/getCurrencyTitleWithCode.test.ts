import { getCurrencyTitleWithCode } from "@/utils/currency/index";

describe("getCurrencyTitleWithCode function tests", () => {
    it("should return correct title for passed code", () => {
        const currencyTitleValueUSD = getCurrencyTitleWithCode("USD");
        const currencyTitleValueEUR = getCurrencyTitleWithCode("EUR");
        const currencyTitleValueCAD = getCurrencyTitleWithCode("CAD");

        expect(currencyTitleValueUSD).toBe("Commercial Dollar");
        expect(typeof currencyTitleValueUSD).toBe("string");
        expect(currencyTitleValueEUR).toBe("Euro");
        expect(typeof currencyTitleValueEUR).toBe("string");
        expect(currencyTitleValueCAD).toBe("Canadian Dollar");
        expect(typeof currencyTitleValueCAD).toBe("string");
    });
});
