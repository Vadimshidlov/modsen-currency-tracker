import { ModalWindowActionType, ModalWindowStateType } from "@/store/types/types";

export const OPEN_MODAL_WINDOW = "OPEN_MODAL_WINDOW";
export const CLOSE_MODAL_WINDOW = "CLOSE_MODAL_WINDOW";

const initialState: ModalWindowStateType = {
    isOpen: false,
    currentCurrency: "",
    currentCurrencyCode: "",
    currentCurrencyValue: 0,
};

const modalWindowReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: ModalWindowStateType = initialState,
    action: ModalWindowActionType,
): ModalWindowStateType => {
    switch (action.type) {
        case OPEN_MODAL_WINDOW:
            return {
                isOpen: true,
                currentCurrency: action.payload.currentCurrency,
                currentCurrencyValue: action.payload.currentCurrencyValue,
                currentCurrencyCode: action.payload.currencyCode,
            };
        case CLOSE_MODAL_WINDOW:
            return {
                isOpen: false,
                currentCurrency: "",
                currentCurrencyCode: "",
                currentCurrencyValue: 0,
            };

        default:
            return state;
    }
};

export default modalWindowReducer;
