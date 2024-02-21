import { combineReducers } from "redux";
import themeReducer from "@/store/reducers/themeReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
