import Chart from "chart.js/auto";
import React from "react";
import { getRandomOhlcv } from "@/utils/getRandomOhlcv";

export const buildCurrencyChart = (ref: React.RefObject<HTMLCanvasElement>) => {
    console.log(ref, "ref");

    return new Promise<void>((resolve, reject) => {
        try {
            const data = {
                datasets: [
                    {
                        data: [...getRandomOhlcv(1000).datasets[0].data],
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                    },
                ],
            };

            const ctx = ref.current?.getContext("2d");

            if (ctx) {
                setTimeout(() => {
                    const chart = new Chart(ctx, {
                        type: "candlestick",
                        data,
                        options: {
                            tooltips: {
                                mode: "index",
                            },
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
                                y: {
                                    display: true,
                                    title: {
                                        display: true,
                                        text: "Value",
                                        position: "bottom",
                                    },
                                    tooltip: {},
                                    position: "right",
                                },
                                xAxis: {
                                    type: "time",
                                    time: {
                                        unit: "day",
                                        tooltipFormat: "YYYY-MM-DD",
                                        displayFormats: {
                                            day: "DD",
                                        },
                                    },
                                    title: {
                                        display: true,
                                        text: "Day",
                                        position: "bottom",
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
                    // chart.render();
                    // resolve(chart.update());
                    // resolve(chart.render());

                    // chart.render();
                    // chart.render();
                    console.log(chart);

                    chart.update();
                    resolve();
                }, 1000);
            } else {
                reject(new Error("Could not get canvas context"));
            }
        } catch (error) {
            reject(error);
        }
    });
};
/* const data = {
        datasets: [
            {
                data: [...getRandomOhlcv(1000).datasets[0].data],
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
            },
        ],
    };
    const ctx = ref.current.getContext("2d");
    if (ctx) {
        const chart = new Chart(ctx, {
            type: "candlestick",
            data,
            options: {
                tooltips: {
                    mode: "index",
                },
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
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: "Value",
                            position: "bottom",
                        },
                        tooltip: {},
                        position: "right",
                    },
                    xAxis: {
                        type: "time",
                        time: {
                            unit: "day",
                            tooltipFormat: "YYYY-MM-DD",
                            displayFormats: {
                                day: "DD",
                            },
                        },
                        title: {
                            display: true,
                            text: "Day",
                            position: "bottom",
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
    } */
