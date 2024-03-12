import { Dispatch } from "redux";
import { LocationAuthActionType, ModalWindowActionType } from "@/store/types";

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

export type BanksDataType = {
    name?: string;
    color?: string;
    id?: string;
    area?: string;
    city_type: string;
    city: string;
    address_type: string;
    address: string;
    house: string;
    install_place?: string;
    work_time?: string;
    gps_x: string;
    gps_y: string;
    install_place_full?: string;
    work_time_full?: string;
    ATM_type?: string;
    ATM_error?: string;
    currency: string;
    cash_in?: string;
    ATM_printer?: string;
};

export type ErrorBoundaryPropsType = {
    children: React.ReactNode;
};

export type ErrorBoundaryStateType = {
    hasError: boolean;
};

export type MockStockDataType = {
    stockCode: string;
    stockValue: number;
};
