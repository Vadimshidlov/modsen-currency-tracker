import { ChartData } from "chart.js";
import { getRandomOhlcv } from "@/utils/chart/index";

interface FinancialDataPoint {
    x: number;
    o: number;
    h: number;
    l: number;
    c: number;
}

describe("getRandomOhlcv function tests", () => {
    test("returns correct data structure with the expected number of data points", () => {
        const currency = 100;
        const startDate = new Date("2024-03-01");
        const days = 31;

        const result: ChartData = getRandomOhlcv(currency, startDate, days);

        expect(result).toBeDefined();
        expect(result.datasets).toBeDefined();
        expect(Array.isArray(result.datasets)).toBe(true);

        expect(result.datasets.length).toBe(1);

        expect(result.datasets[0].data.length).toBe(days);

        result.datasets[0].data.forEach((dataPoint: FinancialDataPoint) => {
            expect(dataPoint.o).toBeDefined();
            expect(typeof dataPoint.o).toBe("number");

            expect(dataPoint.h).toBeDefined();
            expect(typeof dataPoint.h).toBe("number");

            expect(dataPoint.l).toBeDefined();
            expect(typeof dataPoint.l).toBe("number");

            expect(dataPoint.c).toBeDefined();
            expect(typeof dataPoint.c).toBe("number");
        });
    });
});
