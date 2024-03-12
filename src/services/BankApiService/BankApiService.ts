import AxiosBankApiService from "@/services/AxiosBankApiService/index";
import { BanksDataType } from "@/types";

export default class BankApiService {
    private AXIOS_API = AxiosBankApiService;

    public async getAllBanks(): Promise<BanksDataType[]> {
        if (this.checkCache()) {
            const data = localStorage.getItem("cachedBanksData");

            return JSON.parse(data);
        }

        const { data } = await this.AXIOS_API.get<BanksDataType[]>({});

        localStorage.setItem("cachedBanksData", JSON.stringify(data));

        return data;
    }

    private checkCache() {
        const checkedData = localStorage.getItem("cachedBanksData");

        if (checkedData) return true;

        return false;
    }
}
