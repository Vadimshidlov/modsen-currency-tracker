import { Dispatch } from "redux";
import { ThemeAction, ThemeActionType } from "@/store/reducers/themeReducer";

export const switchLightTheme = () => (dispatch: Dispatch<ThemeActionType>) =>
    dispatch({ type: ThemeAction.SWITCH_LIGHT });

export const switchDarkTheme = () => (dispatch: Dispatch<ThemeActionType>) =>
    dispatch({ type: ThemeAction.SWITCH_DARK });
