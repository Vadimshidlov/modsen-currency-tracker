import React, { ChangeEvent, ReactNode } from "react";
import { CurrencyType, CurrentCurrencyStateType } from "@/store/types/types";

export type CurrencyChartPropsType = {
    chartDate: string;
    chartCurrencyValue: number;
};
export type CurrencyChartStateType = {
    isChartBuilding: boolean;
    isOpenModal: boolean;
    updateData: {
        high: number;
        close: number;
        open: number;
        low: number;
    };
};

export type ChartDateStateType = {
    currentDate: string;
};

export type ChartDatePropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    dateValue: string;
    theme: string;
};

export type CurrencyCardPropsType = {
    currencyCode: string;
    theme: string;
};

export type CurrencyCardsPropsType = {
    theme: string;
    currencyData: CurrencyType;
    selectedCurrencyCode: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type CurrencyCardsStateType = object;

export type CurrencyChartControllerPropsType = {
    theme: string;
    currency: CurrentCurrencyStateType;
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

export type DateInputType = {
    className: string;
} & React.ComponentPropsWithRef<"input">;

export type TimelinePagePropsType = {
    theme: string;
};

export type FooterPropsType = {
    theme: string;
};

export type FooterLinkPropsType = {
    title: string;
    links: string[];
};

export type FooterLinkStateType = {
    isOpen: boolean;
};

export type HeaderPropsType = {
    theme: string;
};

export type LastUpdatePropsType = {
    theme: string;
};

export type ChartDataFormPropsType = {
    onFormSubmit: (high: number, close: number, open: number, low: number) => void;
    onClose: () => void;
};

export type ChartDataFormStateType = {
    highInputValue: string;
    closeInputValue: string;
    openInputValue: string;
    lowInputValue: string;
    submitError: string;
};
