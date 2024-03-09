import React from "react";
import Text from "@/components/pages/HomePage/Text/Text";
import { getCurrencyIcon } from "@/utils/currency/getCurrencyIcon";
import { ConverterTitlePropsType } from "@/types/HomePageTypes/types";

export default function ConverterTitle({
    currentCurrencyValue,
    currentCurrencyCode,
}: ConverterTitlePropsType) {
    const { currencyTitle, CurrencyIcon } = getCurrencyIcon(currentCurrencyCode);

    return (
        <div className="modal__title">
            <div className="modal__selected-currency selected-currency">
                <div className="selected-currency__title">
                    <CurrencyIcon />
                    <Text className="">{currencyTitle}</Text>
                </div>
                <div className="selected-currency__value">
                    <Text className="">Value for USD:</Text>
                    <Text className="">{currentCurrencyValue}</Text>
                </div>
            </div>
        </div>
    );
}
