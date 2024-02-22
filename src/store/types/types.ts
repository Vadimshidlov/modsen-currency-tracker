export type ModalWindowStateType = {
    isOpen: boolean;
    currentCurrency: string;
    currentCurrencyValue: number;
};

export enum ThemeAction {
    SWITCH_DARK = "SWITCH_DARK",
    SWITCH_LIGHT = "SWITCH_LIGHT",
}

export type OpenWindowPayloadType = {
    currentCurrency: string;
    currentCurrencyValue: number;
};

export type OpenWindowActionType = {
    type: "OPEN_MODAL_WINDOW";
    payload?: OpenWindowPayloadType;
};

export type CloseWindowActionType = {
    type: "CLOSE_MODAL_WINDOW";
};

export type ModalWindowActionType = OpenWindowActionType | CloseWindowActionType;
