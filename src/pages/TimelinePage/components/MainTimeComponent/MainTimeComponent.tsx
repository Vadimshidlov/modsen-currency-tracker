import React, { Component } from "react";
import { connect } from "react-redux";
import "@/pages/HomePage/components/MainComponent/MainComponent.scss";
import { getCurrency } from "@/store/action-creators/index";
import CurrencyChartController from "@/pages/TimelinePage/components/CurrencyChartController/index";
import { MainTimeComponentPropsType } from "@/types/TimeLinePageTypes";
import ErrorBoundary from "@/components/ErrorBoundary/index";
import LastUpdate from "@/components/LastUpdate/index";

class MainTimeComponent extends Component<MainTimeComponentPropsType> {
    componentDidMount() {
        const { getCurrency: getCurrencyData } = this.props;

        getCurrencyData();
    }

    componentDidUpdate() {
        const { getCurrency: getCurrencyData } = this.props;

        getCurrencyData();
    }

    render() {
        return (
            <main className="main-block main-block__container">
                <LastUpdate />
                <ErrorBoundary>
                    <CurrencyChartController />
                </ErrorBoundary>
            </main>
        );
    }
}

export default connect(null, { getCurrency })(MainTimeComponent);
