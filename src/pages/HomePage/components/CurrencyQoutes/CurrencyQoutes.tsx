import React from "react";
import Text from "@/pages/HomePage/components/Text/index";
import CurrencyCard from "@/pages/HomePage/components/CurrencyCard/index";
import "@/pages/HomePage/components/CurrencyQoutes/CurrencyQoutes.scss";
import { useTypedSelectorHook } from "@/store/hooks/index";
import ModalWindow from "@/pages/HomePage/components/ModalWindow/index";
import { selectCurrency, selectModal, selectTheme } from "@/store/selectors/index";

export default function CurrencyQoutes() {
    const { currency } = useTypedSelectorHook(selectCurrency);
    const { isOpen } = useTypedSelectorHook(selectModal);
    const { theme } = useTypedSelectorHook(selectTheme);

    return (
        <section className={theme === "Light" ? "quotes__container light" : "quotes__container"}>
            <Text className="quotes__title title">Quotes</Text>
            <div className="title__border" />
            <div className="quotes__items">
                {Object.keys(currency.data).map((element) => (
                    <CurrencyCard
                        currencyCode={element}
                        key={element}
                        value={currency.data[element].value}
                    />
                ))}
            </div>
            <ModalWindow isOpen={isOpen} />
        </section>
    );
}
