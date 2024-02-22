import React from "react";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import { getCurrencyTitleWithCode } from "@/utils/getCurrencyWithCode";
import "@/components/SelectCurrency/SelectCurrency.scss";

// function SelectCurrency({ setFormData, ...rest }: ICountrySelectPropsType) {
export default function SelectCurrency() {
    const { currency } = useTypedSelectorHook((state) => state.currency);
    const { currentCurrencyCode } = useTypedSelectorHook((state) => state.modalWindow);

    return (
        <select
            className="select__currency"
            // onChange={setFormData}
        >
            {Object.keys(currency.data).map((element) =>
                element !== currentCurrencyCode ? (
                    <option className="select__item" value={element} key={element}>
                        {getCurrencyTitleWithCode(element)}
                    </option>
                ) : null,
            )}
        </select>
    );
}
