export interface IThemeState {
    theme: "Dark" | "Light";
}

export enum ThemeAction {
    SWITCH_DARK = "SWITCH_DARK",
    SWITCH_LIGHT = "SWITCH_LIGHT",
}

interface IDarkThemeAction {
    type: ThemeAction.SWITCH_DARK;
}

interface ILightThemeAction {
    type: ThemeAction.SWITCH_LIGHT;
}

export type ThemeActionType = ILightThemeAction | IDarkThemeAction;

const initialState: IThemeState = {
    theme: "Dark",
};

const themeReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: IThemeState = initialState,
    action: ThemeActionType,
): IThemeState => {
    switch (action.type) {
        case ThemeAction.SWITCH_DARK:
            return { theme: "Dark" };
        case ThemeAction.SWITCH_LIGHT:
            return { theme: "Light" };

        default:
            return state;
    }
};

export default themeReducer;
