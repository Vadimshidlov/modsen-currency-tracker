import { Dispatch } from "redux";
import { ModalWindowActionType } from "@/store/types/types";

export type UseCloseModalType = () => (dispatch: Dispatch<ModalWindowActionType>) => {
    type: "CLOSE_MODAL_WINDOW";
};
