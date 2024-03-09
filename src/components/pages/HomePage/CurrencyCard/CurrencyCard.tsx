import React from "react";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/CurrencyCard/CurrencyCard.scss";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import { getCurrencyIcon } from "@/utils/currency/getCurrencyIcon";
import { CurrencyCardPropsType } from "@/types/HomePageTypes/types";

export default function CurrencyCard({ currencyCode, value }: CurrencyCardPropsType) {
    const { CurrencyIcon, currencyTitle } = getCurrencyIcon(currencyCode);
    let currencyValue;

    if (currencyCode === "BTC") {
        currencyValue = value;
    } else {
        currencyValue = +value.toFixed(2);
    }

    const { currency } = useTypedSelectorHook((state) => state.currency);

    const { openModalWindow } = useActions();

    const openModalHandler = () => {
        if (currencyTitle) {
            openModalWindow(currency, currencyTitle, value, currencyCode);
        }
    };

    return (
        <button className="currency-card__container" onClick={openModalHandler}>
            <CurrencyIcon className="currency-card__icon" />
            <div className="currency-card__info">
                <Text className="currency-card__titile">{currencyTitle}</Text>
                <Text className="currency-card__percent">{`R$ ${currencyValue}`}</Text>
            </div>
        </button>
    );
}
