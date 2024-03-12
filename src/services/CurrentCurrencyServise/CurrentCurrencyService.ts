import AxiosCurrencyService from "@/services/AxiosCurrencyService/index";
import { CurrencyType } from "@/store/types";
import { getLastUpdateTime } from "@/utils/date/index";

class CurrentCurrencyService {
    private readonly CURRENCY_API_KEY = process.env.CURRENCY_API_KEY;

    private AXIOS_SERVICE = AxiosCurrencyService;

    public async getCurrentCurrency(): Promise<CurrencyType> {
        if (this.checkCache()) {
            const data = localStorage.getItem("cachedCurrency");

            return JSON.parse(data);
        }

        localStorage.setItem("lastUpdateDateResult", getLastUpdateTime());

        const response = await this.AXIOS_SERVICE.get<CurrencyType>(
            {
                headers: {
                    apikey: this.CURRENCY_API_KEY,
                },
            },
            "",
        );

        if (response.status === 400) {
            throw Error("Currency was not found");
        }

        const { data } = response;

        localStorage.setItem("cachedCurrency", JSON.stringify(data));

        return data;
    }

    private checkCache() {
        const checkedData = localStorage.getItem("cachedCurrency");

        if (checkedData) return true;

        return false;
    }
}

export default new CurrentCurrencyService();
