import { Dispatch } from "redux";
import AxiosCurrentCurrencyService from "@/services/CurrentCurrencyServise/index";

import { filterCurrency } from "@/utils/currency/index";
import { CurrentCurrencyActionType } from "@/store/reducers/latestCurrencyReducer";
import { CurrencyType, CurrentCurrencyAction } from "@/store/types";

export function getCurrency() {
    return async (dispatch: Dispatch<CurrentCurrencyActionType>) => {
        try {
            dispatch({ type: CurrentCurrencyAction.GET_CURR_CURRENCY });

            const response = await AxiosCurrentCurrencyService.getCurrentCurrency();

            const filteredCurrency = filterCurrency(response);

            const filteredData: CurrencyType = {
                meta: response.meta,
                data: filteredCurrency,
            };

            dispatch({
                type: CurrentCurrencyAction.GET_CURR_CURRENCY_SUCCES,
                payload: filteredData,
            });
        } catch (error) {
            dispatch({
                type: CurrentCurrencyAction.GET_CURR_CURRENCY_ERROR,
                payload: "Occur some error",
            });
        }
    };
}
