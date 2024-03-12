import React from "react";
import { getCurrencyTitleWithCode } from "@/utils/currency/index";
import "@/pages/HomePage/components/SelectCurrency/SelectCurrency.scss";
import { SelectCurrencyPropsType } from "@/types/HomePageTypes";

export default function SelectCurrency({
    setSecondCurrency,
    data,
    currentCurrencyCode,
    secondCurrencyCode,
    ...rest
}: SelectCurrencyPropsType) {
    return (
        <select
            className="select__currency"
            onChange={setSecondCurrency}
            value={secondCurrencyCode}
            {...rest}
            data-testid="select-currency"
        >
            {Object.keys(data).map((element) =>
                element !== currentCurrencyCode ? (
                    <option className="select__item" value={element} key={element}>
                        {getCurrencyTitleWithCode(element)}
                    </option>
                ) : null,
            )}
        </select>
    );
}
