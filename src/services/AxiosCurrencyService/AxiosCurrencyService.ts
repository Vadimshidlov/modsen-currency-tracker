/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ISetupCache, setupCache } from "axios-cache-adapter";

class AxiosCurrentCurrencyService {
    public requestApiInstance: AxiosInstance;

    private CASH: ISetupCache;

    constructor() {
        this.CASH = setupCache({
            maxAge: 3 * 60 * 1000,
        });

        this.requestApiInstance = axios.create({
            baseURL: "https://api.currencyapi.com",
            adapter: this.CASH.adapter,
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

export default new AxiosCurrentCurrencyService();
