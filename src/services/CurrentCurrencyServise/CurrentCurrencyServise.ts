import AxiosCurrencyService from "@/services/AxiosCurrencyService/AxiosCurrencyService";
import { ICurrency } from "@/store/reducers/latestCurrencyReducer";

class CurrentCurrencyServise {
    private readonly CURRENCY_API_KEY =
        process.env.REACT_APP_CURRENCY_API_KEY ??
        "cur_live_HZpwlzZ47XqVqbO0DbXu2eQFN8EMscELeA8glgQa";

    private AxiosCurrencyService = AxiosCurrencyService;

    public async getCurrentCurrency(): Promise<ICurrency> {
        const response = await this.AxiosCurrencyService.get<ICurrency>(
            {
                headers: {
                    apikey: this.CURRENCY_API_KEY,
                },
            },
            "v3/latest",
        );

        if (response.status === 400) {
            throw Error("User with such credentials was not found");
        }

        const { data } = response;

        return data;
    }
}

export default new CurrentCurrencyServise();
