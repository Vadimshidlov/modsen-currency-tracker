import { Dispatch } from "redux";
import { GET_MAP_DATA } from "@/store/reducers/mapDataReducer";
import { MapDataActionType } from "@/store/types/types";

export const getMapData = () => (dispatch: Dispatch<MapDataActionType>) =>
    dispatch({ type: GET_MAP_DATA });
