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
import { getDataForChart } from "@/utils/chart/getDataForChart";
import ChartObservable from "@/Observable/ChartObservable";
import { CurrencyChartStateType, CurrencyChartPropsType } from "@/types/TimeLinePageTypes/types";
import "@/components/pages/TimelinePage/Chart/CurrencyChart.scss";
import ChartDataForm from "@/components/pages/TimelinePage/ChartDataForm/ChartDataForm";

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
        this.updateCurrencyChartHandler = this.updateCurrencyChartHandler.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.updateChartDataHandler = this.updateChartDataHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
    }

    componentDidMount() {
        if (this.chartRef.current) {
            this.buildCurrencyChartHandler();
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
                this.updateCurrencyChartHandler();
            }
        }

        if (prevState.updateData !== updateData) {
            this.updateCurrencyChartHandler();
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

    updateChartDataHandler(high: number, close: number, open: number, low: number) {
        this.setState({
            updateData: {
                high,
                close,
                open,
                low,
            },
        });
    }

    openModalHandler() {
        this.setState({
            isOpenModal: true,
        });
    }

    closeModalHandler() {
        this.setState({
            isOpenModal: false,
        });
    }

    render() {
        const { isChartBuilding, isOpenModal } = this.state;

        return (
            <div className="currency-chart__container">
                <canvas ref={this.chartRef} id="currency-chart">
                    TimelinePage
                </canvas>
                {isChartBuilding && <Loader />}
                <div className="currency-chart__controller">
                    <button
                        className="currency-chart__random-button"
                        onClick={this.updateCurrencyChartHandler}
                    >
                        RANDOMIZE
                    </button>
                    <button
                        className="currency-chart__random-button"
                        onClick={this.openModalHandler}
                    >
                        UPDATE
                    </button>
                </div>

                {isOpenModal && (
                    <ChartDataForm
                        onFormSubmit={this.updateChartDataHandler}
                        onClose={this.closeModalHandler}
                    />
                )}
            </div>
        );
    }
}

export default CurrencyChart;
