import React, { Component } from "react";
import { connect } from "react-redux";
import LastUpdate from "@/components/pages/TimelinePage/LastUpdate/LastUpdate";
import "@/components/pages/HomePage/MainComponent/MainComponent.scss";
import { getCurrency } from "@/store/action-creators/getCurrency";
import MapController from "@/components/pages/BankCard/MapController/MapController";

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
            <main className="main-block">
                <LastUpdate />
                <MapController />
            </main>
        );
    }
}

export default connect(null, { getCurrency })(MainComponent);
