import React from "react";
import Text from "@/components/Text/Text";
import "@/components/CurrencyCard/CurrencyCard.scss";
import ArgentinePesoIcon from "@/assets/svg/currency/argentine_peso.svg";
import AustralianDollarIcon from "@/assets/svg/currency/australian-dollar.svg";
import BitcoinIcon from "@/assets/svg/currency/bitcoin.svg";
import CanadianDollarIcon from "@/assets/svg/currency/canadian-dollar.svg";
import CommercialDollarIcon from "@/assets/svg/currency/Rectangle 3.svg";
import EuroIcon from "@/assets/svg/currency/euro.svg";
import YenIcon from "@/assets/svg/currency/yen.svg";
import YuanIcon from "@/assets/svg/currency/yuan.svg";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export type CurrencyPropsType = {
    currencyCode: string;
    value: number;
};

export default function CurrencyCard({ currencyCode, value }: CurrencyPropsType) {
    let CurrencyIcon;
    let currencyTitle = "";
    const currencyValue = +value.toFixed(2);
    // const currencyValue = value;

    const { currency } = useTypedSelectorHook((state) => state.currency);

    const { openModalWindow } = useActions();

    const openModalHandler = () => {
        if (currencyTitle) {
            openModalWindow(currency, currencyTitle, value, currencyCode);
        }
    };

    switch (currencyCode) {
        case "USD":
            CurrencyIcon = CommercialDollarIcon;
            currencyTitle = "Commercial Dollar";
            break;
        case "CAD":
            CurrencyIcon = CanadianDollarIcon;
            currencyTitle = "Canadian Dollar";

            break;
        case "AUD":
            CurrencyIcon = AustralianDollarIcon;
            currencyTitle = "Australian Dollar";

            break;
        case "EUR":
            CurrencyIcon = EuroIcon;
            currencyTitle = "Euro";
            break;
        case "ARS":
            CurrencyIcon = ArgentinePesoIcon;
            currencyTitle = "Argentine Peso";

            break;
        case "JPY":
            CurrencyIcon = YenIcon;
            currencyTitle = "Yen";

            break;
        case "CNY":
            CurrencyIcon = YuanIcon;
            currencyTitle = "Yuan";

            break;
        case "BTC":
            CurrencyIcon = BitcoinIcon;
            currencyTitle = "Bitcoin";

            break;

        default:
            CurrencyIcon = CommercialDollarIcon;
            currencyTitle = "";
    }

    return (
        <button className="currency-card__containter" onClick={() => openModalHandler()}>
            <CurrencyIcon width={80} height={80} />
            <div className="currency-card__info">
                <Text className="currency-card__titile">{currencyTitle}</Text>
                <Text className="currency-card__percent">{`R$ ${currencyValue}`}</Text>
            </div>
        </button>
    );
}
