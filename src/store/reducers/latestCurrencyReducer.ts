export interface ICurrency {
    meta: MetaType;
    data: {
        [currencyCode: string]: {
            code: string;
            value: number;
        };
    };
}

export interface IcurrentCurrencyState {
    currency: ICurrency;
    isLoading: boolean;
    error: null | string;
}

export enum CurrentCurrencyAction {
    GET_CURR_CURRENCY = "GET_CURR_CURRENCY",
    GET_CURR_CURRENCY_SUCCES = "GET_CURR_CURRENCY_SUCCES",
    GET_CURR_CURRENCY_ERROR = "GET_CURR_CURRENCY_ERROR",
}

interface IgetCurrCurrency {
    type: CurrentCurrencyAction.GET_CURR_CURRENCY;
}

interface IgetCurrCurrencySucces {
    type: CurrentCurrencyAction.GET_CURR_CURRENCY_SUCCES;
    payload?: ICurrency;
}

interface IgetCurrCurrencyError {
    type: CurrentCurrencyAction.GET_CURR_CURRENCY_ERROR;
    payload?: string;
}

export type MetaType = {
    last_updated_at: string;
};

const initialState: IcurrentCurrencyState = {
    currency: {
        meta: {
            last_updated_at: "",
        },
        data: {},
    },
    isLoading: false,
    error: null,
};

export type CurrentCurrencyActionType =
    | IgetCurrCurrency
    | IgetCurrCurrencySucces
    | IgetCurrCurrencyError;

const latestCurrencyReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: IcurrentCurrencyState = initialState,
    action: CurrentCurrencyActionType,
): IcurrentCurrencyState => {
    const intialCurrency = {
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
                currency: intialCurrency,
            };

        case CurrentCurrencyAction.GET_CURR_CURRENCY_SUCCES:
            return { isLoading: true, error: null, currency: action.payload };

        case CurrentCurrencyAction.GET_CURR_CURRENCY_ERROR:
            return { isLoading: true, error: action.payload, currency: intialCurrency };

        default:
            return state;
    }
};

export default latestCurrencyReducer;
