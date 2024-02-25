import React, { useEffect, useRef } from "react";
// import * as chartJs from "chart.js";
import { ChartData } from "chart.js";
import * as luxon from "luxon";
import {
    CandlestickController,
    CandlestickElement,
    OhlcController,
    OhlcElement,
} from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import "chartjs-adapter-luxon";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export default function CurrencyChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const startDate1 = luxon.DateTime.fromRFC2822("01 Aug 2021 00:00 GMT");
            const startDate2 = luxon.DateTime.fromRFC2822("02 Aug 2021 01:00 GMT");
            const startDate3 = luxon.DateTime.fromRFC2822("03 Aug 2021 01:00 GMT");
            const startDate4 = luxon.DateTime.fromRFC2822("04 Aug 2021 01:00 GMT");
            const startDate5 = luxon.DateTime.fromRFC2822("05 Aug 2021 02:00 GMT");
            const startDate6 = luxon.DateTime.fromRFC2822("06 Aug 2021 02:00 GMT");
            const startDate7 = luxon.DateTime.fromRFC2822("07 Aug 2021 02:00 GMT");
            const startDate8 = luxon.DateTime.fromRFC2822("08 Aug 2021 02:00 GMT");
            const startDate9 = luxon.DateTime.fromRFC2822("09 Aug 2021 02:00 GMT");
            const startDate10 = luxon.DateTime.fromRFC2822("10 Aug 2021 02:00 GMT");
            const startDate11 = luxon.DateTime.fromRFC2822("11 Aug 2021 02:00 GMT");
            const startDate12 = luxon.DateTime.fromRFC2822("12 Aug 2021 02:00 GMT");
            const startDate13 = luxon.DateTime.fromRFC2822("13 Aug 2021 02:00 GMT");
            const startDate14 = luxon.DateTime.fromRFC2822("14 Aug 2021 02:00 GMT");
            const startDate15 = luxon.DateTime.fromRFC2822("15 Aug 2021 02:00 GMT");

            const data: ChartData = {
                datasets: [
                    {
                        data: [
                            {
                                x: +startDate1.valueOf(),
                                o: 1,
                                h: 1.2,
                                l: 0.85,
                                c: 1.25,
                            },
                            {
                                x: +startDate2.valueOf(),
                                o: 1.2,
                                h: 1.1,
                                l: 0.5,
                                c: 0.9,
                            },
                            {
                                x: +startDate3.valueOf(),
                                o: 1,
                                h: 1,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate4.valueOf(),
                                o: 1.2,
                                h: 1.1,
                                l: 0.5,
                                c: 0.9,
                            },
                            {
                                x: +startDate5.valueOf(),
                                o: 1.2,
                                h: 1.1,
                                l: 0.5,
                                c: 0.9,
                            },
                            {
                                x: +startDate6.valueOf(),
                                o: 1.2,
                                h: 1.1,
                                l: 0.5,
                                c: 0.9,
                            },
                            {
                                x: +startDate7.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate8.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate9.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate10.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate11.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate12.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate13.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate14.valueOf(),
                                o: 1,
                                h: 1.5,
                                l: 0.75,
                                c: 1.25,
                            },
                            {
                                x: +startDate15.valueOf(),
                                o: 1,
                                h: 1.4,
                                l: 0.9,
                                c: 1.35,
                            },
                        ],
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        // barThickness: 1,
                        // barPercentage: 20,
                    },
                ],
            };
            const ctx = chartRef.current.getContext("2d");
            // ctx.canvas.width = 800;
            // ctx.canvas.height = 400;
            if (ctx) {
                const chart = new Chart(ctx, {
                    type: "candlestick",
                    data,
                    options: {
                        interaction: {
                            intersect: false,
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Modsen Currency Tracker",
                            },
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                intersect: false,
                                position: "nearest",
                            },
                        },
                        scales: {
                            yAxis: {
                                position: "right",
                                offset: true,
                                grid: {
                                    display: true,
                                    drawOnChartArea: true,
                                    drawTicks: true,
                                },
                            },
                            xAxis: {
                                type: "time",
                                time: {
                                    unit: "day",
                                    tooltipFormat: "YYYY-MM-DD", // Формат для всплывающих подсказок
                                    // tooltipFormat: "YYYY-MM-DD", // Формат для всплывающих подсказок
                                    displayFormats: {
                                        day: "DD", // Формат для отображения на графике
                                    },
                                },
                                barPercentage: 0.5,
                                barThickness: 1,
                                grid: {
                                    display: true,
                                    drawOnChartArea: true,
                                    drawTicks: true,
                                },
                            },
                        },
                    },
                });

                chart.render();
            }
        }
    }, []);

    return (
        <div className="currency-chart__container">
            <canvas ref={chartRef} id="currency-chart">
                TimelinePage
            </canvas>
        </div>
    );
}
