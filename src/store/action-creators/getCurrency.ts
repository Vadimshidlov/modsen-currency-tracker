import { Dispatch } from "redux";
import AxiosCurrentCurrencyService from "@/services/CurrentCurrencyServise/CurrentCurrencyServise";
import {
    CurrentCurrencyAction,
    CurrentCurrencyActionType,
} from "@/store/reducers/latestCurrencyReducer";

export function getCurrency() {
    return async (dispatch: Dispatch<CurrentCurrencyActionType>) => {
        try {
            dispatch({ type: CurrentCurrencyAction.GET_CURR_CURRENCY });

            const response = await AxiosCurrentCurrencyService.getCurrentCurrency();

            dispatch({ type: CurrentCurrencyAction.GET_CURR_CURRENCY_SUCCES, payload: response });
        } catch (error) {
            dispatch({
                type: CurrentCurrencyAction.GET_CURR_CURRENCY_ERROR,
                payload: "Occur some error",
            });
        }
    };
}
