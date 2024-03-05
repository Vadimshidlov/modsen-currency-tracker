import { isInRadius } from "@/utils/map/isInRadius";

describe("isInRadius function tests", () => {
    test("returns true if the given coordinates are within the specified radius from the center", () => {
        const lat = 40.7128;
        const lng = -74.006;
        const centerLat = 40.73061;
        const centerLng = -73.935242;
        const radius = 10;

        const result = isInRadius(lat, lng, centerLat, centerLng, radius);

        expect(result).toBe(true);
    });

    test("returns true if the given coordinates are exactly on the edge of the specified radius from the center", () => {
        const lat = 40.73061;
        const lng = -73.935242;
        const centerLat = 40.73061;
        const centerLng = -73.935242;
        const radius = 0;

        const result = isInRadius(lat, lng, centerLat, centerLng, radius);

        expect(result).toBe(true);
    });
});
