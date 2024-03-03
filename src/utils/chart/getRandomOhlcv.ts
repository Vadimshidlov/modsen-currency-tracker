import { ChartData } from "chart.js";

import * as luxon from "luxon";

const generateRandomPrice = (min = 100, max = 500): number =>
    parseFloat((Math.random() * (max - min) + min).toFixed(2));

const generateRandomMultiplier = (): number => parseFloat((Math.random() * 0.2 + 0.9).toFixed(2));

export const getRandomOhlcv = (currency: number, startDate: Date = new Date(), days = 31) => {
    const randomChartData: ChartData = {
        datasets: [
            {
                data: [],
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
            },
        ],
    };

    for (let i = days - 1; i >= 0; i -= 1) {
        const date = new Date(startDate);

        date.setDate(startDate.getDate() - i);

        const luxonDate = luxon.DateTime.fromRFC2822(date.toUTCString());

        const priceMultiplier = generateRandomMultiplier();
        const open = +(currency * priceMultiplier).toFixed(2);
        const high = +generateRandomPrice(open * 1.1, open * 1.3).toFixed(2);
        const low = +generateRandomPrice(open * 0.7, open * 0.9).toFixed(2);
        const close = +generateRandomPrice(low, high).toFixed(2);

        randomChartData.datasets[0].data.push({
            x: luxonDate.valueOf(),
            o: open,
            h: high,
            l: low,
            c: close,
        });
    }

    return randomChartData;
};
