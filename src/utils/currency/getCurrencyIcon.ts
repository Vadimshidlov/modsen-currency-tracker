import CommercialDollarIcon from "@/assets/svg/currency/Rectangle 3.svg";
import CanadianDollarIcon from "@/assets/svg/currency/canadian-dollar.svg";
import AustralianDollarIcon from "@/assets/svg/currency/australian-dollar.svg";
import EuroIcon from "@/assets/svg/currency/euro.svg";
import ArgentinePesoIcon from "@/assets/svg/currency/argentine_peso.svg";
import YenIcon from "@/assets/svg/currency/yen.svg";
import YuanIcon from "@/assets/svg/currency/yuan.svg";
import BitcoinIcon from "@/assets/svg/currency/bitcoin.svg";

export const getCurrencyIcon = (currencyCode: string) => {
    let CurrencyIcon;
    let currencyTitle;

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

    return {
        CurrencyIcon,
        currencyTitle,
    };
};
