import { Dispatch } from "redux";
import { ModalWindowActionType, OpenWindowActionType } from "@/store/types/types";
import { CLOSE_MODAL_WINDOW, OPEN_MODAL_WINDOW } from "@/store/reducers/modalWindowReducer";

export const openModalWindow =
    (currentCurrency: string, currentCurrencyValue: number) =>
    (dispatch: Dispatch<OpenWindowActionType>) =>
        dispatch({ type: OPEN_MODAL_WINDOW, payload: { currentCurrency, currentCurrencyValue } });

export const closeModalWindow = () => (dispatch: Dispatch<ModalWindowActionType>) =>
    dispatch({ type: CLOSE_MODAL_WINDOW });
