import mapboxgl, { Map } from "mapbox-gl";
import { addMapMarker } from "@/utils/map/addMapMarker";
import { BanksDataType } from "@/types/types";

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
    })),
    Marker: jest.fn().mockImplementation(() => ({
        setLngLat: jest.fn().mockReturnThis(),
        setPopup: jest.fn().mockReturnThis(),
        addTo: jest.fn().mockReturnThis(),
    })),
    Popup: jest.fn().mockImplementation(() => ({
        setHTML: jest.fn().mockReturnThis(),
    })),
}));

describe("addMapMarker function tests", () => {
    test("adds a marker to the map with the provided data", () => {
        const markerItem: BanksDataType = {
            address_type: "Street",
            address: "Example Address",
            city_type: "City",
            city: "Example City",
            currency: "USD",
            house: "123",
            gps_y: "53.9",
            gps_x: "27.6",
            name: "Example Bank",
        };
        const markersList: mapboxgl.Marker[] = [];
        const map = new Map({ container: document.createElement("div") });

        addMapMarker(markerItem, markersList, map);

        expect(mapboxgl.Marker).toHaveBeenCalledTimes(1);
        expect(mapboxgl.Popup).toHaveBeenCalledTimes(1);
        expect(markersList.length).toBe(1);

        const markerInstance = markersList[0];
        expect(markerInstance.setLngLat).toHaveBeenCalledWith([
            +markerItem.gps_y,
            +markerItem.gps_x,
        ]);
        expect(markerInstance.setPopup).toHaveBeenCalled();
        expect(markerInstance.addTo).toHaveBeenCalledWith(map);
    });
});
