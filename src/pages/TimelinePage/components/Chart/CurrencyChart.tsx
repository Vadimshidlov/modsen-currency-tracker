import {
    CandlestickController,
    CandlestickElement,
    OhlcController,
    OhlcElement,
} from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import "chartjs-adapter-luxon";
import React, { Component } from "react";
import Loader from "@/components/Loader/index";

import { getDataForChart } from "@/utils/chart/index";
import ChartObservable from "@/Observable/ChartObservable";
import { CurrencyChartStateType, CurrencyChartPropsType } from "@/types/TimeLinePageTypes";
import "@/pages/TimelinePage/components/Chart/CurrencyChart.scss";
import ChartDataForm from "@/pages/TimelinePage/components/ChartDataForm/index";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

class CurrencyChart extends Component<CurrencyChartPropsType, CurrencyChartStateType> {
    private readonly chartRef: React.RefObject<HTMLCanvasElement | null>;

    chart: Chart;

    constructor(props: CurrencyChartPropsType) {
        super(props);

        this.state = {
            isChartBuilding: false,
            isOpenModal: false,
            updateData: {
                high: 0,
                close: 0,
                open: 0,
                low: 0,
            },
        };

        this.chartRef = React.createRef<HTMLCanvasElement | null>();
        this.handleCurrencyChartUpdate = this.handleCurrencyChartUpdate.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleChartDataUpdate = this.handleChartDataUpdate.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    componentDidMount() {
        if (this.chartRef.current) {
            this.handleCurrencyChartBuild();
        }
    }

    componentDidUpdate(prevProps: CurrencyChartPropsType, prevState: CurrencyChartStateType) {
        const { chartCurrencyValue, chartDate } = this.props;
        const { updateData } = this.state;

        if (
            prevProps.chartCurrencyValue !== chartCurrencyValue ||
            prevProps.chartDate !== chartDate
        ) {
            if (this.chartRef.current) {
                this.handleCurrencyChartUpdate();
            }
        }

        if (prevState.updateData !== updateData) {
            this.handleCurrencyChartUpdate();
        }
    }

    handleCurrencyChartUpdate() {
        const { updateData } = this.state;
        const { high, close, open, low } = updateData;
        const { chartDate, chartCurrencyValue } = this.props;

        if (this.chart && low !== 0 && open !== 0 && close !== 0 && high !== 0) {
            const chartOptions = getDataForChart(open, new Date(chartDate));

            this.chart.data.datasets[0].data[0].open = open;
            this.chart.data.datasets[0].data[0].low = low;
            this.chart.data.datasets[0].data[0].close = close;
            this.chart.data.datasets[0].data[0].high = high;

            this.chart.data.datasets = chartOptions.data.datasets;
            this.chart.options.animations = chartOptions.options.animations;
            this.chart.update();

            ChartObservable.notify("Building");
        } else {
            const chartOptions = getDataForChart(chartCurrencyValue, new Date(chartDate));

            this.chart.data.datasets = chartOptions.data.datasets;

            this.chart.options.animations = chartOptions.options.animations;
            this.chart.update();

            ChartObservable.notify("Building");
        }
    }

    handleChartDataUpdate(high: number, close: number, open: number, low: number) {
        this.setState({
            updateData: {
                high,
                close,
                open,
                low,
            },
        });
    }

    handleModalOpen() {
        this.setState({
            isOpenModal: true,
        });
    }

    handleModalClose() {
        this.setState({
            isOpenModal: false,
        });
    }

    handleCurrencyChartBuild() {
        const { chartDate, chartCurrencyValue } = this.props;

        const chartOptions = getDataForChart(chartCurrencyValue, new Date(chartDate));

        this.chart = new Chart(this.chartRef.current, chartOptions);
        this.chart.render();

        ChartObservable.notify("Building");
    }

    render() {
        const { isChartBuilding, isOpenModal } = this.state;

        return (
            <>
                <div className="currency-chart__container">
                    <div className="currency-chart__chart">
                        <canvas ref={this.chartRef} id="currency-chart">
                            TimelinePage
                        </canvas>
                    </div>

                    {isChartBuilding && <Loader />}

                    {isOpenModal && (
                        <ChartDataForm
                            onFormSubmit={this.handleChartDataUpdate}
                            onClose={this.handleModalClose}
                        />
                    )}
                </div>
                <div className="currency-chart__controller">
                    <button
                        className="currency-chart__random-button"
                        onClick={this.handleCurrencyChartUpdate}
                    >
                        RANDOMIZE
                    </button>
                    <button
                        className="currency-chart__random-button"
                        onClick={this.handleModalOpen}
                    >
                        UPDATE
                    </button>
                </div>
            </>
        );
    }
}

export default CurrencyChart;
