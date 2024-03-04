export const getCurrencyTitleWithCode = (currencyCode: string) => {
    let currencyTitle = "";

    switch (currencyCode) {
        case "USD":
            currencyTitle = "Commercial Dollar";
            break;
        case "CAD":
            currencyTitle = "Canadian Dollar";

            break;
        case "AUD":
            currencyTitle = "Australian Dollar";

            break;
        case "EUR":
            currencyTitle = "Euro";
            break;
        case "ARS":
            currencyTitle = "Argentine Peso";

            break;
        case "JPY":
            currencyTitle = "Yen";

            break;
        case "CNY":
            currencyTitle = "Yuan";

            break;
        case "BTC":
            currencyTitle = "Bitcoin";

            break;

        default:
            currencyTitle = "";
    }

    return currencyTitle;
};
