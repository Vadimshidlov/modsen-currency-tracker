import { getCurrentDate } from "@/utils/date/getCurrentDate";

describe("getCurrentDate function tests", () => {
    test("returns current date in YYYY-MM-DD format", () => {
        const currentDate = new Date();

        const expectedYear = currentDate.getFullYear().toString().padStart(4, "0");
        const expectedMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const expectedDay = currentDate.getDate().toString().padStart(2, "0");
        const expectedDateString = `${expectedYear}-${expectedMonth}-${expectedDay}`;

        const result = getCurrentDate(currentDate);

        expect(result).toBe(expectedDateString);
    });

    test("returns correct date for a specific date", () => {
        const specificDate = new Date("2024-03-15");
        const expectedDateString = "2024-03-15";

        const result = getCurrentDate(specificDate);

        expect(result).toBe(expectedDateString);
    });
});
