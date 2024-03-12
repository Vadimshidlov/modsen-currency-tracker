import {
    CurrentCurrencyAction,
    CurrentCurrencyStateType,
    GetCurrCurrencyErrorType,
    GetCurrCurrencySuccesType,
    GetCurrCurrencyType,
} from "@/store/types";

const initialState: CurrentCurrencyStateType = {
    currency: {
        meta: {
            last_updated_at: "1",
        },
        data: {},
    },
    isLoading: false,
    error: null,
};

export type CurrentCurrencyActionType =
    | GetCurrCurrencyType
    | GetCurrCurrencySuccesType
    | GetCurrCurrencyErrorType;

const latestCurrencyReducer = (
    state: CurrentCurrencyStateType = initialState,
    action: CurrentCurrencyActionType,
): CurrentCurrencyStateType => {
    const initialCurrency = {
        meta: {
            last_updated_at: "",
        },
        data: {},
    };

    switch (action.type) {
        case CurrentCurrencyAction.GET_CURR_CURRENCY:
            return {
                isLoading: true,
                error: null,
                currency: initialCurrency,
            };

        case CurrentCurrencyAction.GET_CURR_CURRENCY_SUCCES:
            return { isLoading: false, error: null, currency: action.payload };

        case CurrentCurrencyAction.GET_CURR_CURRENCY_ERROR:
            return { isLoading: true, error: action.payload, currency: initialCurrency };

        default:
            return state;
    }
};

export default latestCurrencyReducer;
