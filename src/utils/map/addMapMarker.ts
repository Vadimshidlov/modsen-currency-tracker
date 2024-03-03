import mapboxgl from "mapbox-gl";
import { BanksDataType } from "@/types/types";

export const addMapMarker = (
    markerItem: BanksDataType,
    markersList: mapboxgl.Marker[],
    map: mapboxgl.Map,
) => {
    const { address_type, address, city_type, city, currency, house, gps_y, gps_x } = markerItem;
    const fullAdress = `${address_type}${address} ${house}, ${city_type}.${city}`;
    const fullCurrency = currency.split(" ").filter(Boolean).join(", ");
    const bankName = markerItem.name ? markerItem.name : "Belarusbank";

    const popup = new mapboxgl.Popup({
        offset: 35,
    }).setHTML(
        `<h2>${bankName}</h2><p>Address: ${fullAdress}</p><p>Currency: ${fullCurrency}.</p> `,
    );
    const marker = new mapboxgl.Marker().setLngLat([+gps_y, +gps_x]).setPopup(popup).addTo(map);

    markersList.push(marker);
};
