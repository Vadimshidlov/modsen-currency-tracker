import { getConvertResult } from "@/utils/currency/index";

describe("filterCurrency function tests", () => {
    it("should return correct result for given values", () => {
        const euroCoeff = 0.92;
        const dollarCoeff = 1;
        const count = "1";

        const resultConvertation = getConvertResult(euroCoeff, dollarCoeff, count);

        expect(resultConvertation).toBe("0.92");
    });

    it("should return result with correct type of return valuse", () => {
        const yuanCoeff = 7.19;
        const canadianDollarCoeff = 1.36;
        const count = "12";

        const resultConvertation = getConvertResult(yuanCoeff, canadianDollarCoeff, count);

        expect(typeof resultConvertation).toBe("string");
        expect(typeof +resultConvertation).toBe("number");
    });
});
