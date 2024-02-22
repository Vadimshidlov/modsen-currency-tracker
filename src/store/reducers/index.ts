import { combineReducers } from "redux";
import themeReducer from "@/store/reducers/themeReducer";
import latestCurrencyReducer from "@/store/reducers/latestCurrencyReducer";
import modalWindowReducer from "@/store/reducers/modalWindowReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    currency: latestCurrencyReducer,
    modalWindow: modalWindowReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
