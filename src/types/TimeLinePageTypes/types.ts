import React, { ChangeEvent, ReactNode } from "react";
import { ICurrency, IcurrentCurrencyState } from "@/store/reducers/latestCurrencyReducer";

export type CurrencyChartPropsType = {
    chartDate: string;
    chartCurrencyValue: number;
};
export type CurrencyChartStateType = {
    isChartBuilding: boolean;
};

export type ChartDateStateType = {
    currentDate: string;
};

export type ChartDatePropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    dateValue: string;
};

export type CurrencyCardPropsType = {
    currencyCode: string;
};

export type CurrencyCardsPropsType = {
    currencyData: ICurrency;
    selectedCurrencyCode: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type CurrencyCardsStateType = object;

export type CurrencyChartControllerPropsType = {
    currency: IcurrentCurrencyState;
};

export type CurrencyChartControllerStateType = {
    currentDate: string;
    currentCurrency: { code: string; value: number };
};

export type CustomToastPropsType = {
    message: string;
    duration: number;
    isStart: boolean;
};

export type CustomToastStateType = {
    visible: boolean;
};

export type ToggleThemePropsType = {
    theme: string;
    switchLightTheme: () => void;
    switchDarkTheme: () => void;
};

export type ToggleThemeStateType = object;

export type MainTimeComponentPropsType = {
    getCurrency: () => Promise<void>;
};

export type TextPropsType = {
    className: string;
    children: ReactNode;
} & React.ComponentPropsWithRef<"p">;
