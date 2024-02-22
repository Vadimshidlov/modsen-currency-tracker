/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosCurrencyService {
    public requestApiInstance: AxiosInstance;

    constructor() {
        this.requestApiInstance = axios.create({
            baseURL: "https://api.currencyapi.com/v3/latest",
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

export default new AxiosCurrencyService();
