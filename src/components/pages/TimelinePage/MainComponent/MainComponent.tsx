import React, { Component } from "react";
import { connect } from "react-redux";
import LastUpdate from "@/components/pages/TimelinePage/LastUpdate/LastUpdate";
import "@/components/pages/HomePage/MainComponent/MainComponent.scss";
import { getCurrency } from "@/store/action-creators/getCurrency";
import CurrencyChartController from "@/components/pages/TimelinePage/CurrencyChartController/CurrencyChartController";

export type MainComponentPropsType = {
    getCurrency: () => Promise<void>;
};

class MainComponent extends Component<MainComponentPropsType> {
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
                <CurrencyChartController />
            </main>
        );
    }
}

export default connect(null, { getCurrency })(MainComponent);
