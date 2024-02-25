import React from "react";
import Text from "@/components/Text/Text";
import { getCurrencyIcon } from "@/utils/getCurrencyIcon";

export type ConverterTitlePropsType = {
    // currentCurrencyTitle: string;
    currentCurrencyCode: string;
    currentCurrencyValue: number;
};

export default function ConverterTitle({
    // currentCurrencyTitle,
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

                {/* <Text className="">{currentCurrencyTitle}</Text> */}
                {/* <Text className="">Value for USD: {currentCurrencyValue}</Text> */}

                <div className="selected-currency__value">
                    <Text className="">Value for USD:</Text>
                    <Text className="">{currentCurrencyValue}</Text>
                </div>
            </div>
        </div>
    );
}
