import { ModalWindowActionType, ModalWindowStateType } from "@/store/types/types";
import { getSecondCurrency } from "@/utils/getSecondCurrency";

export const OPEN_MODAL_WINDOW = "OPEN_MODAL_WINDOW";
export const CLOSE_MODAL_WINDOW = "CLOSE_MODAL_WINDOW";
export const SELECT_SECOND_CURRENCY = "SELECT_SECOND_CURRENCY";

const initialState: ModalWindowStateType = {
    isOpen: false,
    currentCurrencyTitle: "",
    currentCurrencyCode: "",
    currentCurrencyValue: 0,
    secondCurrencyTitle: "",
    secondCurrencyCode: "",
    secondCurrencyValue: 0,
};

const modalWindowReducer = (
    state: ModalWindowStateType = initialState,
    action: ModalWindowActionType,
): ModalWindowStateType => {
    switch (action.type) {
        case OPEN_MODAL_WINDOW: {
            const { secondCurrencyCode, secondCurrencyValue, secondCurrencyTitle } =
                getSecondCurrency(action.payload.currencyData, action.payload.currencyCode);

            return {
                isOpen: true,
                currentCurrencyTitle: action.payload.currentCurrencyTitle,
                currentCurrencyValue: action.payload.currentCurrencyValue,
                currentCurrencyCode: action.payload.currencyCode,
                secondCurrencyTitle,
                secondCurrencyCode,
                secondCurrencyValue,
            };
        }

        case SELECT_SECOND_CURRENCY:
            return {
                ...state,
                secondCurrencyTitle: action.payload.secondCurrencyTitle,
                secondCurrencyCode: action.payload.secondCurrencyCode,
                secondCurrencyValue: action.payload.secondCurrencyValue,
            };

        case CLOSE_MODAL_WINDOW:
            return {
                isOpen: false,
                currentCurrencyTitle: "",
                currentCurrencyCode: "",
                currentCurrencyValue: 0,
                secondCurrencyTitle: "",
                secondCurrencyCode: "",
                secondCurrencyValue: 0,
            };

        default:
            return state;
    }
};

export default modalWindowReducer;
