import AxiosCurrencyService from "@/services/AxiosCurrencyService/AxiosCurrencyService";
import { ICurrency } from "@/store/reducers/latestCurrencyReducer";

class CurrentCurrencyService {
    private readonly CURRENCY_API_KEY =
        // process.env.REACT_APP_CURRENCY_API_KEY ?? ""
        "cur_live_HZpwlzZ47XqVqbO0DbXu2eQFN8EMscELeA8glgQa";

    private AXIOS_SERVICE = AxiosCurrencyService;

    public async getCurrentCurrency(): Promise<ICurrency> {
        if (this.checkCache()) {
            const data = localStorage.getItem("cachedCurrency");

            return JSON.parse(data);
        }

        const response = await this.AXIOS_SERVICE.get<ICurrency>(
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
