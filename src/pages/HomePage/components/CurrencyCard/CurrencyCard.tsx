import React from "react";
import Text from "@/pages/HomePage/components/Text/index";
import "@/pages/HomePage/components/CurrencyCard/CurrencyCard.scss";
import { useActions, useTypedSelectorHook } from "@/store/hooks/index";
import { getCurrencyIcon } from "@/utils/currency";
import { CurrencyCardPropsType } from "@/types/HomePageTypes";
import { RootStateType } from "@/store/reducers";

const selectCurrency = (state: RootStateType) => state.currency;

export default function CurrencyCard({ currencyCode, value }: CurrencyCardPropsType) {
    const { CurrencyIcon, currencyTitle } = getCurrencyIcon(currencyCode);

    const currencyValue = currencyCode === "BTC" ? value : +value.toFixed(2);

    const { currency } = useTypedSelectorHook(selectCurrency);

    const { openModalWindow } = useActions();

    const handleModalOpen = () => {
        if (currencyTitle) {
            openModalWindow(currency, currencyTitle, value, currencyCode);
        }
    };

    return (
        <button className="currency-card__container" onClick={handleModalOpen}>
            <CurrencyIcon className="currency-card__icon" />
            <div className="currency-card__info">
                <Text className="currency-card__titile">{currencyTitle}</Text>
                <Text className="currency-card__percent">{`R$ ${currencyValue}`}</Text>
            </div>
        </button>
    );
}
