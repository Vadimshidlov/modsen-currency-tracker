import { Dispatch } from "react";
import { SUCCES_LOCATION_AUTH, ERROR_LOCATION_AUTH } from "@/store/reducers/locationAuthReducer";
import { LocationAuthActionType } from "@/store/types";

export const successAuthUserLocation =
    (userLtt: number, userLgt: number) => (dispatch: Dispatch<LocationAuthActionType>) =>
        dispatch({
            type: SUCCES_LOCATION_AUTH,
            payload: { userLgt, userLtt },
        });

export const errorAuthUserLocation = () => (dispatch: Dispatch<LocationAuthActionType>) =>
    dispatch({
        type: ERROR_LOCATION_AUTH,
    });
