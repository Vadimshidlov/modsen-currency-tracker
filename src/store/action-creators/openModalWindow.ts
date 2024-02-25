import { Dispatch } from "redux";
import {
    ModalWindowActionType,
    OpenWindowActionType,
    SelectSecondCurrencyActionType,
} from "@/store/types/types";
import {
    CLOSE_MODAL_WINDOW,
    OPEN_MODAL_WINDOW,
    SELECT_SECOND_CURRENCY,
} from "@/store/reducers/modalWindowReducer";
import { ICurrency } from "@/store/reducers/latestCurrencyReducer";

export const openModalWindow =
    (
        currencyData: ICurrency,
        currentCurrencyTitle: string,
        currentCurrencyValue: number,
        currencyCode: string,
    ) =>
    (dispatch: Dispatch<OpenWindowActionType>) =>
        dispatch({
            type: OPEN_MODAL_WINDOW,
            payload: { currencyData, currentCurrencyTitle, currentCurrencyValue, currencyCode },
        });

export const selectSecondCurrency =
    (secondCurrencyTitle: string, secondCurrencyValue: number, secondCurrencyCode: string) =>
    (dispatch: Dispatch<SelectSecondCurrencyActionType>) =>
        dispatch({
            type: SELECT_SECOND_CURRENCY,
            payload: { secondCurrencyTitle, secondCurrencyValue, secondCurrencyCode },
        });

export const closeModalWindow = () => (dispatch: Dispatch<ModalWindowActionType>) =>
    dispatch({ type: CLOSE_MODAL_WINDOW });
