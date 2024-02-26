/* import React, { useEffect, useRef } from "react";
import { ChartData } from "chart.js"; */
import {
    CandlestickController,
    CandlestickElement,
    OhlcController,
    OhlcElement,
} from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import "chartjs-adapter-luxon";
import React, { Component } from "react";
// import { getRandomOhlcv } from "@/utils/getRandomOhlcv";
import { buildCurrencyChart } from "@/utils/buildCurrencyChart";
import Loader from "@/components/pages/TimelinePage/Loader/Loader";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export type CurrencyChartPropsType = object;
export type CurrencyChartStateType = {
    isChartBuilding: boolean;
};

class CurrencyChart extends Component<CurrencyChartPropsType, CurrencyChartStateType> {
    private readonly chartRef: React.RefObject<HTMLCanvasElement | null>;

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

    buildCurrencyChartHandler() {
        this.setState({
            isChartBuilding: true,
        });

        buildCurrencyChart(this.chartRef)
            .then(() => {
                this.setState({
                    isChartBuilding: false,
                });
            })
            .catch(() => {
                console.log("We have an error with building chart");
            });
    }

    render() {
        const { isChartBuilding } = this.state;

        /* return isChartBuilding ? (
            // <Loader/>
            <div className="currency-chart__container">
                <canvas ref={this.chartRef} id="currency-chart">
                    TimelinePage
                </canvas>
            </div>
        ) : (
            <div className="currency-chart__container">
                {isChartBuilding && <Loader/>}
                <canvas ref={this.chartRef} id="currency-chart">
                    TimelinePage
                </canvas>
            </div>
        ); */

        return (
            <div className="currency-chart__container">
                <canvas ref={this.chartRef} id="currency-chart">
                    TimelinePage
                </canvas>
                {isChartBuilding && <Loader />}
            </div>
        );

        // return <Loader />;
    }
}

export default CurrencyChart;
