import React, { useEffect, useRef } from "react";
import AxiosCoinApiService from "@/services/AxiosCoinApiService/AxiosCoinApiService";

export default function TimelinePage() {
    const coinApiService = useRef(AxiosCoinApiService);

    useEffect(() => {
        const getData = async () => {
            // const currencySymbol = "USD";

            const data = await coinApiService.current.get(
                {
                    /* headers: {
                        Accept: "application/json",
                        "X-CoinAPI-Key": "95E4BBFF-13CA-4906-B72B-45F4BDA648DC",
                    }, */
                    headers: {
                        Accept: "application/json",
                        Authorization: "95E4BBFF-13CA-4906-B72B-45F4BDA648DC",
                    },
                },
                // ``,
                // `/v1/ohlcv/exchanges/BTC/${currencySymbol}/history/?period_id=1DAY&time_start=2024-02-23T00:00:00&time_end=2024-02-24T00:00:00`,
                `v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest`,
            );
            console.log(data);

            /* const data = await coinApiService.current.get(
            {
              headers: {
                "X-CoinAPI-Key": "95E4BBFF-13CA-4906-B72B-45F4BDA648DC",
              },
            },
            `/${currencySymbol}?start_date=2024-01-01&end_date=2024-01-31`,
          );
          console.log(data); */
        };

        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Добавляем нули в начало, если месяц состоит из одной цифры
        const day = String(currentDate.getDate()).padStart(2, "0");
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const seconds = String(currentDate.getSeconds()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

        console.log(formattedDate);

        getData();
    }, []);

    return (
        <div>
            <div>TimelinePage</div>
        </div>
    );
}
