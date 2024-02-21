import { Dispatch } from "redux";
import { ThemeAction, ThemeActionType } from "@/store/reducers/themeReducer";

export const switchLightTheme = () => (dispath: Dispatch<ThemeActionType>) =>
    dispath({ type: ThemeAction.SWITCH_LIGHT });

export const switchDarkTheme = () => (dispath: Dispatch<ThemeActionType>) =>
    dispath({ type: ThemeAction.SWITCH_DARK });
