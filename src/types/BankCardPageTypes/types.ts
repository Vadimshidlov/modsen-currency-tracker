import { IcurrentCurrencyState } from "@/store/reducers/latestCurrencyReducer";
import { GetMapDataActionType } from "@/store/reducers/mapDataReducer";
import { MarkersDataType } from "@/types/types";

export type MapControllerPropsType = {
    currency: IcurrentCurrencyState;
    mapData: MarkersDataType[];
};

export type MapControllerStateType = {
    searchCurrency: string;
    selectedCurrency: string;
};

export type MapPropsType = {
    selectedCurrency: string;
    markersData: MarkersDataType[];
};

export type MapStateType = {
    lng: number;
    lat: number;
    zoom: number;
    isLoading: boolean;
};

export type MainBankComponentPropsType = {
    getCurrency: () => Promise<void>;
    getMapData: () => GetMapDataActionType;
};
