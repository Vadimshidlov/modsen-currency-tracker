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

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export type CurrencyChartPropsType = {
    chartDate: string;
    chartCurrencyValue: number;
};
export type CurrencyChartStateType = {
    isChartBuilding: boolean;
};

class CurrencyChart extends Component<CurrencyChartPropsType, CurrencyChartStateType> {
    private readonly chartRef: React.RefObject<HTMLCanvasElement | null>;

    chart: Chart;

    constructor(props: CurrencyChartPropsType) {
        super(props);

        this.state = {
            isChartBuilding: false,
        };

        this.chartRef = React.createRef<HTMLCanvasElement | null>();
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
                // this.buildCurrencyChartHandler();
                this.updateCurrencyChartHandler();
            }
        }
    }

    buildCurrencyChartHandler() {
        const { chartDate, chartCurrencyValue } = this.props;

        console.log(chartDate, chartCurrencyValue, `buildCurrencyChartHandler`);

        /* this.setState({
            isChartBuilding: true,
        }); */

        const chartOptions = getDataForChart(chartCurrencyValue, new Date(chartDate));

        this.chart = new Chart(this.chartRef.current, chartOptions);
        this.chart.render();

        /* this.setState({
            isChartBuilding: false,
        }); */

        ChartObservable.notify();
    }

    updateCurrencyChartHandler() {
        const { chartDate, chartCurrencyValue } = this.props;

        console.log(chartDate, chartCurrencyValue, `buildCurrencyChartHandler`);

        // if (chartCurrencyValue) {
        /* this.setState({
            isChartBuilding: true,
        }); */

        if (this.chart) {
            /* this.setState({
                isChartBuilding: true,
            }); */

            const chartOptions = getDataForChart(chartCurrencyValue, new Date(chartDate));

            this.chart.data.datasets = chartOptions.data.datasets;
            this.chart.options.animations = chartOptions.options.animations;
            this.chart.update();

            /* this.setState({
                isChartBuilding: false,
            });
*/
            ChartObservable.notify();
        }
    }

    render() {
        const { isChartBuilding } = this.state;

        return (
            <div className="currency-chart__container">
                <canvas ref={this.chartRef} id="currency-chart">
                    TimelinePage
                </canvas>
                {isChartBuilding && <Loader />}
            </div>
        );
    }
}

export default CurrencyChart;
