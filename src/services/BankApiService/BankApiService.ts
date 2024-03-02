import AxiosBankApiService from "@/services/AxiosBankApiService/AxiosBankApiService";

export type BanksDataType = {
    name?: string;
    color?: string;
    id?: string;
    area?: string;
    city_type: string;
    city: string;
    address_type: string;
    address: string;
    house: string;
    install_place?: string;
    work_time?: string;
    gps_x: string;
    gps_y: string;
    install_place_full?: string;
    work_time_full?: string;
    ATM_type?: string;
    ATM_error?: string;
    currency: string;
    cash_in?: string;
    ATM_printer?: string;
};

export default class BankApiService {
    private AXIOS_API = AxiosBankApiService;

    public async getAllBanks(): Promise<BanksDataType[]> {
        const { data } = await this.AXIOS_API.get<BanksDataType[]>({});

        return data;
    }
}
