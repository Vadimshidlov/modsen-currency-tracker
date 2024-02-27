import { getRandomOhlcv } from "@/utils/getRandomOhlcv";

export const getDataForChart = (currency: number, startDate: Date = new Date()) => {
    const data = {
        datasets: [
            {
                data: [...getRandomOhlcv(currency, new Date(startDate)).datasets[0].data],
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: "#012032",
                color: {
                    up: "#16C782",
                    down: "#EA3943",
                    unchanged: "#999",
                },
                borderColor: {
                    up: "#16C782",
                    down: "#EA3943",
                    unchanged: "#999",
                },
            },
        ],
    };

    return {
        type: "candlestick",
        data,
        options: {
            legend: {
                display: true,
            },
            animations: {
                onComplete: () => ({
                    delayed: true,
                }),
            },
            responsive: true,
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
                    grid: {
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: true,
                        color: "rgba(255,255,255,0.33)",
                    },
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
                        color: "rgba(255,255,255,0.33)",
                    },
                },
            },
        },
    };
};
