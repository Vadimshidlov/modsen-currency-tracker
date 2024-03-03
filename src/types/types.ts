import { Dispatch } from "redux";
import { LocationAuthActionType, ModalWindowActionType } from "@/store/types/types";

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

export type UserAuthLocationPropsType = {
    onSuccess: (
        userLtt: number,
        userLgt: number,
    ) => (dispatch: React.Dispatch<LocationAuthActionType>) => void;
    onError: () => (dispatch: React.Dispatch<LocationAuthActionType>) => void;
};
