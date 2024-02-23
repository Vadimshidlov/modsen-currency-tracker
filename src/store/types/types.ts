import { ICurrency } from "@/store/reducers/latestCurrencyReducer";

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
    currencyData: ICurrency;
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
