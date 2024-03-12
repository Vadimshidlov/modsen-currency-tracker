import { BanksDataType } from "@/types";

export type ModalWindowStateType = {
    isOpen: boolean;
    currentCurrencyTitle: string;
    currentCurrencyCode: string;
    currentCurrencyValue: number;
    secondCurrencyTitle: string;
    secondCurrencyCode: string;
    secondCurrencyValue: number;
};

export enum ThemeAction {
    SWITCH_DARK = "SWITCH_DARK",
    SWITCH_LIGHT = "SWITCH_LIGHT",
}

export type OpenWindowPayloadType = {
    currencyData: CurrencyType;
    currentCurrencyTitle: string;
    currencyCode: string;
    currentCurrencyValue: number;
};

export type SecondCurrencyPayloadType = {
    secondCurrencyTitle: string;
    secondCurrencyCode: string;
    secondCurrencyValue: number;
};

export type OpenWindowActionType = {
    type: "OPEN_MODAL_WINDOW";
    payload?: OpenWindowPayloadType;
};

export type SelectSecondCurrencyActionType = {
    type: "SELECT_SECOND_CURRENCY";
    payload?: SecondCurrencyPayloadType;
};

export type CloseWindowActionType = {
    type: "CLOSE_MODAL_WINDOW";
};

export type ModalWindowActionType =
    | OpenWindowActionType
    | CloseWindowActionType
    | SelectSecondCurrencyActionType;

export type ThemeStateType = {
    theme: string | "Dark" | "Light";
};

export type PreviousThemeType = null | string;

export type DarkThemeActionType = {
    type: "SWITCH_DARK";
};

export type LightThemeActionType = {
    type: "SWITCH_LIGHT";
};

export type ThemeActionType = LightThemeActionType | DarkThemeActionType;

export type MapDataStateType = {
    mapData: Partial<BanksDataType>[];
};

export type GetMapDataType = "GET_MAP_DATA";

export type GetMapDataActionType = {
    type: GetMapDataType;
};

export type MapDataActionType = GetMapDataActionType;

export type SuccessLocationAuthType = {
    type: "SUCCES_LOCATION_AUTH";
    payload: {
        userLtt: number;
        userLgt: number;
    };
};

export type UnSuccessLocationAuthType = {
    type: "ERROR_LOCATION_AUTH";
};

export type LocationStateType = {
    isLocationAuth: boolean;
    userLtt: number;
    userLgt: number;
};

export type LocationAuthActionType = SuccessLocationAuthType | UnSuccessLocationAuthType;

export type CurrencyType = {
    meta: MetaType;
    data: CurrencyDataType;
};

export type CurrencyDataType = {
    [currencyCode: string]: {
        code: string;
        value: number;
    };
};

export type CurrentCurrencyStateType = {
    currency: CurrencyType;
    isLoading: boolean;
    error: null | string;
};

export enum CurrentCurrencyAction {
    GET_CURR_CURRENCY = "GET_CURR_CURRENCY",
    GET_CURR_CURRENCY_SUCCES = "GET_CURR_CURRENCY_SUCCES",
    GET_CURR_CURRENCY_ERROR = "GET_CURR_CURRENCY_ERROR",
}

export type GetCurrCurrencyType = {
    type: CurrentCurrencyAction.GET_CURR_CURRENCY;
};

export type GetCurrCurrencySuccesType = {
    type: CurrentCurrencyAction.GET_CURR_CURRENCY_SUCCES;
    payload?: CurrencyType;
};

export type GetCurrCurrencyErrorType = {
    type: CurrentCurrencyAction.GET_CURR_CURRENCY_ERROR;
    payload?: string;
};

export type MetaType = {
    last_updated_at: string;
};
