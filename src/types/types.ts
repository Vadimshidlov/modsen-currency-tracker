import { Dispatch } from "redux";
import { ModalWindowActionType } from "@/store/types/types";

export type UseCloseModalType = () => (dispatch: Dispatch<ModalWindowActionType>) => {
    type: "CLOSE_MODAL_WINDOW";
};

export type MarkersDataType = {
    name: string;
    color: string;
    lngLat: [number, number];
    currency?: string[];
    address?: string;
};

export type ObserverFunctionType = () => void;
