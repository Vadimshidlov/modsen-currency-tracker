import { LocationAuthActionType, LocationStateType } from "@/store/types/types";

export const SUCCES_LOCATION_AUTH = "SUCCES_LOCATION_AUTH";
export const ERROR_LOCATION_AUTH = "ERROR_LOCATION_AUTH";

const initialState: LocationStateType = {
    isLocationAuth: false,
    userLtt: 0,
    userLgt: 0,
};

const locationAuthReducer = (
    state: LocationStateType = initialState,
    action: LocationAuthActionType,
): LocationStateType => {
    switch (action.type) {
        case SUCCES_LOCATION_AUTH:
            return {
                isLocationAuth: true,
                userLtt: action.payload.userLtt,
                userLgt: action.payload.userLgt,
            };

        case ERROR_LOCATION_AUTH:
            return initialState;

        default:
            return state;
    }
};

export default locationAuthReducer;
