import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosCoinApiService {
    public requestApiInstance: AxiosInstance;

    constructor() {
        this.requestApiInstance = axios.create({
            baseURL: "https://rest.coinapi.io/",
        });
    }

    public post<D>(
        config: AxiosRequestConfig | undefined,
        data: object | undefined = {},
        queryParams: string = "",
    ): Promise<AxiosResponse<D>> {
        return this.requestApiInstance.post(queryParams, data, config);
    }

    public get<D>(
        config: AxiosRequestConfig | undefined,
        queryParams = "",
    ): Promise<AxiosResponse<D>> {
        return this.requestApiInstance.get(queryParams, config);
    }
}

export default new AxiosCoinApiService();
