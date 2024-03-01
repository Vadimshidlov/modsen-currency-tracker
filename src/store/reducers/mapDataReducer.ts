import { mockMapData } from "@/store/currency-data/mockMapData";
import { MarkersDataType } from "@/types/types";

export type MapDataStateType = {
    mapData: MarkersDataType[];
};

export type GetMapDataType = "GET_MAP_DATA";

export type GetMapDataActionType = {
    type: GetMapDataType;
};

export const GET_MAP_DATA: GetMapDataType = "GET_MAP_DATA";

export type MapDataActionType = GetMapDataActionType;

const initialState: MapDataStateType = {
    mapData: mockMapData,
};

const mapDataReducer = (
    state: MapDataStateType = initialState,
    action: MapDataActionType,
): MapDataStateType => {
    switch (action.type) {
        case GET_MAP_DATA:
            return { mapData: mockMapData };

        default:
            return state;
    }
};

export default mapDataReducer;
