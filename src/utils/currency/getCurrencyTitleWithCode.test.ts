import { getCurrencyTitleWithCode } from "@/utils/currency/getCurrencyTitleWithCode";

describe("getCurrencyTitleWithCode function", () => {
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
