import { getRandomOhlcv } from "@/utils/chart/index";

export const getDataForChart = (currency: number, startDate: Date = new Date()) => {
    const data = {
        datasets: [
            {
                data: [...getRandomOhlcv(currency, new Date(startDate)).datasets[0].data],
                barPercentage: 1,
                categoryPercentage: 0.3,
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
                    title: {
                        display: true,
                        text: "Day",
                        position: "bottom",
                    },
                    barPercentage: 0.2,
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
