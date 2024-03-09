export const isInRadius = (
    lat: number,
    lng: number,
    centerLat: number,
    centerLng: number,
    radius: number,
) => {
    const latDiff = lat - centerLat;
    const lngDiff = lng - centerLng;
    const distanceSquared = latDiff * latDiff + lngDiff * lngDiff;

    return distanceSquared <= radius * radius;
};
