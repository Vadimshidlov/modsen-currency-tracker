import React, { ReactNode } from "react";
import { CurrencyDataType } from "@/store/reducers/latestCurrencyReducer";

export type CurrencyCardPropsType = {
    currencyCode: string;
    value: number;
};

export type ConverterTitlePropsType = {
    currentCurrencyCode: string;
    currentCurrencyValue: number;
};

export type ModalWindowPropsType = {
    isOpen: boolean;
};

export type SelectCurrencyPropsType = {
    data: CurrencyDataType;
    currentCurrencyCode: string;
    secondCurrencyCode: string;
    setSecondCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.ComponentPropsWithRef<"select">;

export type CurrencyStockPropsType = {
    stockCode: string;
    value: number;
};

export type TextPropsType = {
    className: string;
    children: ReactNode;
} & React.ComponentPropsWithRef<"p">;

export type TextInputType = {
    className: string;
} & React.ComponentPropsWithRef<"input">;
