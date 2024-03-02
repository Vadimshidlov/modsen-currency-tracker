import { ChangeEvent } from "react";
import { BanksDataType } from "@/services/BankApiService/BankApiService";
import { IcurrentCurrencyState } from "@/store/reducers/latestCurrencyReducer";
import {
    GetMapDataActionType,
    LocationAuthActionType,
    LocationStateType,
} from "@/store/types/types";

export type MapControllerPropsType = {
    mapData: BanksDataType[];
    userLocationData: LocationStateType;
    errorAuthUserLocation: () => (dispatch: React.Dispatch<LocationAuthActionType>) => void;
    successAuthUserLocation: (
        userLtt: number,
        userLgt: number,
    ) => (dispatch: React.Dispatch<LocationAuthActionType>) => void;
};

export type MapControllerStateType = {
    searchCurrency: string;
    selectedCurrency: string;
};

export type MapPropsType = {
    selectedCurrency: string;
    markersData: BanksDataType[];
    userLtt: number;
    userLgt: number;
};

export type MapStateType = {
    lng: number;
    lat: number;
    zoom: number;
    isLoading: boolean;
    isUserLocationAuth: boolean;
};

export type MainBankComponentPropsType = {
    getCurrency: () => Promise<void>;
    getMapData: () => GetMapDataActionType;
};

export type SearchCurrencyPropsType = {
    handleSelectCurrency: (value: string) => void;
    currencyData: IcurrentCurrencyState;
    searchCurrencyValue: string;
    onSearchCurrencyValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SearchCurrencyStateType = object;
