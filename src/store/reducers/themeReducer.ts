import { ThemeActionType, ThemeStateType } from "@/store/types/types";

export const SWITCH_DARK = "SWITCH_DARK";
export const SWITCH_LIGHT = "SWITCH_LIGHT";

const initialState: ThemeStateType = {
    theme: "Dark",
};

const themeReducer = (
    state: ThemeStateType = initialState,
    action: ThemeActionType,
): ThemeStateType => {
    switch (action.type) {
        case SWITCH_DARK:
            return { theme: "Dark" };
        case SWITCH_LIGHT:
            return { theme: "Light" };

        default:
            return state;
    }
};

export default themeReducer;
