import { validateChartFormSubmit } from "@/utils/chart/validateChartFormSubmit";

describe("validateChartFormSubmit function tests", () => {
    test("returns true if input values are valid", () => {
        const lowInputValue = "50";
        const openInputValue = "60";
        const highInputValue = "70";
        const closeInputValue = "65";

        const isValid = validateChartFormSubmit(
            lowInputValue,
            openInputValue,
            highInputValue,
            closeInputValue,
        );

        expect(isValid).toBe(true);
    });

    test("returns false if input values are invalid", () => {
        const lowInputValue = "50";
        const openInputValue = "60";
        const highInputValue = "40";
        const closeInputValue = "65";

        const isValid = validateChartFormSubmit(
            lowInputValue,
            openInputValue,
            highInputValue,
            closeInputValue,
        );

        expect(isValid).toBe(false);
    });
});
