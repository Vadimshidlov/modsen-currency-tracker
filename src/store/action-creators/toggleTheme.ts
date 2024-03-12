import { Dispatch } from "redux";
import { SWITCH_DARK, SWITCH_LIGHT } from "@/store/reducers/themeReducer";
import { ThemeActionType } from "@/store/types";

export const switchLightTheme = () => (dispatch: Dispatch<ThemeActionType>) => {
    localStorage.setItem("userTheme", "Light");

    return dispatch({ type: SWITCH_LIGHT });
};

export const switchDarkTheme = () => (dispatch: Dispatch<ThemeActionType>) => {
    localStorage.setItem("userTheme", "Dark");

    return dispatch({ type: SWITCH_DARK });
};
