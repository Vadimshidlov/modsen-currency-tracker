import React from "react";
import Text from "@/components/Text/Text";

export type ConverterTitlePropsType = {
    currentCurrencyTitle: string;
    currentCurrencyValue: number;
};

export default function ConverterTitle({
    currentCurrencyTitle,
    currentCurrencyValue,
}: ConverterTitlePropsType) {
    return (
        <div className="modal__title">
            <div className="modal__selected-currency">
                <Text className="">{currentCurrencyTitle}</Text>
                {/* <Text className="">Value for USD: {currentCurrencyValue}</Text> */}
                <Text className="">Value for USD:</Text>
                <Text className="">{currentCurrencyValue}</Text>
            </div>
        </div>
    );
}
