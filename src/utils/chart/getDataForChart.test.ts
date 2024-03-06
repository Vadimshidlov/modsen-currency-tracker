import { ChartData } from "chart.js";
import * as helpers from "@/utils/chart/getDataForChart";
import * as getRandomOhlcv from "@/utils/chart/getRandomOhlcv";

jest.mock("@/utils/chart/getRandomOhlcv");

const mockedGetRandomOhlcv = getRandomOhlcv.getRandomOhlcv as jest.MockedFunction<
    typeof getRandomOhlcv.getRandomOhlcv
>;

describe("getDataForChart function tests", () => {
    test("returns correct chart data", () => {
        const currency = 100;
        const startDate = new Date("2024-03-05");
        const mockRandomOhlcvData: ChartData = {
            datasets: [
                {
                    data: [],
                },
            ],
        };

        mockedGetRandomOhlcv.mockReturnValue(mockRandomOhlcvData);

        const result = helpers.getDataForChart(currency, startDate);

        expect(result).toEqual({
            type: "candlestick",
            data: {
                datasets: [
                    {
                        data: mockRandomOhlcvData.datasets[0].data,
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
            },
            options: {
                legend: {
                    display: true,
                },
                animations: {
                    onComplete: expect.any(Function),
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
        });
    });
});
