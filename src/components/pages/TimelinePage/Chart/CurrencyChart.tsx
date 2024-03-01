import {
    CandlestickController,
    CandlestickElement,
    OhlcController,
    OhlcElement,
} from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import "chartjs-adapter-luxon";
import React, { Component } from "react";
import Loader from "@/components/pages/TimelinePage/Loader/Loader";
import { getDataForChart } from "@/utils/getDataForChart";
import ChartObservable from "@/Observable/ChartObservable";
import { CurrencyChartStateType, CurrencyChartPropsType } from "@/types/TimeLinePageTypes/types";
import "@/components/pages/TimelinePage/Chart/CurrencyChart.scss";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

class CurrencyChart extends Component<CurrencyChartPropsType, CurrencyChartStateType> {
    private readonly chartRef: React.RefObject<HTMLCanvasElement | null>;

    chart: Chart;

    constructor(props: CurrencyChartPropsType) {
        super(props);

        this.state = {
            isChartBuilding: false,
        };

        this.chartRef = React.createRef<HTMLCanvasElement | null>();
        this.updateCurrencyChartHandler = this.updateCurrencyChartHandler.bind(this);
    }

    componentDidMount() {
        if (this.chartRef.current) {
            this.buildCurrencyChartHandler();
        }
    }

    componentDidUpdate(prevProps: CurrencyChartPropsType) {
        const { chartCurrencyValue, chartDate } = this.props;

        if (
            prevProps.chartCurrencyValue !== chartCurrencyValue ||
            prevProps.chartDate !== chartDate
        ) {
            if (this.chartRef.current) {
                this.updateCurrencyChartHandler();
            }
        }
    }

    buildCurrencyChartHandler() {
        const { chartDate, chartCurrencyValue } = this.props;

        const chartOptions = getDataForChart(chartCurrencyValue, new Date(chartDate));

        this.chart = new Chart(this.chartRef.current, chartOptions);
        this.chart.render();

        ChartObservable.notify("Building");
    }

    updateCurrencyChartHandler() {
        const { chartDate, chartCurrencyValue } = this.props;

        console.log(chartDate, chartCurrencyValue, `buildCurrencyChartHandler`);

        if (this.chart) {
            const chartOptions = getDataForChart(chartCurrencyValue, new Date(chartDate));

            this.chart.data.datasets = chartOptions.data.datasets;
            this.chart.options.animations = chartOptions.options.animations;
            this.chart.update();

            ChartObservable.notify("Building");
        }
    }

    render() {
        const { isChartBuilding } = this.state;

        // throw new Error("Ooops! We have an error!");

        return (
            <div className="currency-chart__container">
                <canvas ref={this.chartRef} id="currency-chart">
                    TimelinePage
                </canvas>
                {isChartBuilding && <Loader />}
                <button
                    className="currency-chart__random-button"
                    onClick={this.updateCurrencyChartHandler}
                >
                    RANDOMIZE
                </button>
            </div>
        );
    }
}

export default CurrencyChart;
