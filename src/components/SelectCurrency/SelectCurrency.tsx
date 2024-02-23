import React from "react";
// import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import { getCurrencyTitleWithCode } from "@/utils/getCurrencyWithCode";
import "@/components/SelectCurrency/SelectCurrency.scss";
import { CurrencyDataType } from "@/store/reducers/latestCurrencyReducer";

/* export type SelectCurrencyPropsType = {
    data: CurrencyDataType;
    currentCurrencyCode: string;
}; */

export interface ISelectCurrencyPropsType extends React.ComponentPropsWithRef<"select"> {
    data: CurrencyDataType;
    currentCurrencyCode: string;
    secondCurrencyCode: string;
    setSecondCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// function SelectCurrency({ setFormData, ...rest }: ICountrySelectPropsType) {
export default function SelectCurrency({
    setSecondCurrency,
    data,
    currentCurrencyCode,
    secondCurrencyCode,
    ...rest
}: ISelectCurrencyPropsType) {
    /* const defaultValue = getCurrencyTitleWithCode(secondCurrencyCode);
    console.log(defaultValue, `defaultValue Select`);
    console.log(secondCurrencyCode, `secondCurrencyCode Select`); */

    return (
        <select
            className="select__currency"
            onChange={setSecondCurrency}
            value={secondCurrencyCode}
            {...rest}
        >
            {Object.keys(data).map((element) =>
                element !== currentCurrencyCode ? (
                    <option className="select__item" value={element} key={element}>
                        {getCurrencyTitleWithCode(element)}
                    </option>
                ) : null,
            )}
        </select>
        /*  <select className="select__currency" onChange={setSecondCurrency} {...rest}>
            <option className="select__item" value={defaultValue} key={defaultValue}>
                {defaultValue}
            </option>
            {Object.keys(data).map((element) =>
                element !== currentCurrencyCode && element !== secondCurrencyCode ? (
                    <option className="select__item" value={element} key={element}>
                        {getCurrencyTitleWithCode(element)}
                    </option>
                ) : null,
            )}
        </select> */
    );
}
