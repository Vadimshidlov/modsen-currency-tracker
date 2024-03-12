import { mockMapData } from "@/store/currency-data/index";
import { GetMapDataType, MapDataActionType, MapDataStateType } from "@/store/types";

export const GET_MAP_DATA: GetMapDataType = "GET_MAP_DATA";

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
