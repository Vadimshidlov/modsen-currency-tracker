import { throttle } from "@/utils/map/index";

describe("throttle function tests", () => {
    jest.useFakeTimers();

    test("calls the main function only once within the specified delay", () => {
        const mainFunction = jest.fn();
        const delay = 100;
        const throttledFunction = throttle(mainFunction, delay);

        throttledFunction();
        throttledFunction();

        jest.advanceTimersByTime(delay);

        expect(mainFunction).toHaveBeenCalledTimes(1);
    });
});
