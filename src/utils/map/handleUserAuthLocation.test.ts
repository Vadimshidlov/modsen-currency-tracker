import { handleUserAuthLocation } from "@/utils/map/index";

describe("handleUserAuthLocation function tests", () => {
    test("calls onSuccess callback with latitude and longitude if geolocation is available", () => {
        const mockPosition = {
            coords: {
                latitude: 51.5074,
                longitude: -0.1278,
            },
        };
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const mockGeolocation = {
            getCurrentPosition: jest.fn().mockImplementation((success) => success(mockPosition)),
        };

        const originalGeolocation = global.navigator.geolocation;

        Object.defineProperty(global.navigator, "geolocation", {
            value: mockGeolocation,
            writable: true,
        });

        handleUserAuthLocation({ onSuccess, onError });

        expect(onSuccess).toHaveBeenCalledWith(51.5074, -0.1278);
        expect(onError).not.toHaveBeenCalled();

        Object.defineProperty(global.navigator, "geolocation", {
            value: originalGeolocation,
            writable: true,
        });
    });

    test("calls onError callback if geolocation is not available", () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const mockGeolocation = {
            getCurrentPosition: jest.fn().mockImplementation((_, error) => error()),
        };

        const originalGeolocation = global.navigator.geolocation;

        Object.defineProperty(global.navigator, "geolocation", {
            value: mockGeolocation,
            writable: true,
        });

        handleUserAuthLocation({ onSuccess, onError });

        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();

        Object.defineProperty(global.navigator, "geolocation", {
            value: originalGeolocation,
            writable: true,
        });
    });
});
