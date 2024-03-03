import { Dispatch } from "redux";
import { SWITCH_DARK, SWITCH_LIGHT } from "@/store/reducers/themeReducer";
import { ThemeActionType } from "@/store/types/types";

export const switchLightTheme = () => (dispatch: Dispatch<ThemeActionType>) =>
    dispatch({ type: SWITCH_LIGHT });

export const switchDarkTheme = () => (dispatch: Dispatch<ThemeActionType>) =>
    dispatch({ type: SWITCH_DARK });
