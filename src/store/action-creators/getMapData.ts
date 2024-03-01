import { Dispatch } from "redux";
import { GET_MAP_DATA, MapDataActionType } from "@/store/reducers/mapDataReducer";

export const getMapData = () => (dispatch: Dispatch<MapDataActionType>) =>
    dispatch({ type: GET_MAP_DATA });
