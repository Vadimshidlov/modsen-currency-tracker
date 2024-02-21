import { combineReducers } from "redux";
import themeReducer from "@/store/reducers/themeReducer";
import latestCurrencyReducer from "@/store/reducers/latestCurrencyReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    currency: latestCurrencyReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
