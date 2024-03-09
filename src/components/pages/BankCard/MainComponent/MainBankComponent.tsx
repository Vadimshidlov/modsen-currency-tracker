import React, { Component } from "react";
import { connect } from "react-redux";
import LastUpdate from "@/components/pages/TimelinePage/LastUpdate/LastUpdate";
import "@/components/pages/HomePage/MainComponent/MainComponent.scss";
import { getCurrency } from "@/store/action-creators/getCurrency";
import { getMapData } from "@/store/action-creators/getMapData";

import MapController from "@/components/pages/BankCard/MapController/MapController";
import { MainBankComponentPropsType } from "@/types/BankCardPageTypes/types";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

class MainBankComponent extends Component<MainBankComponentPropsType> {
    componentDidMount() {
        const { getCurrency: getCurrencyData, getMapData: getAllMapData } = this.props;

        getCurrencyData();
        getAllMapData();
    }

    componentDidUpdate() {
        const { getCurrency: getCurrencyData } = this.props;

        getCurrencyData();
    }

    render() {
        return (
            <main className="main-block">
                <LastUpdate />
                <ErrorBoundary>
                    <MapController />
                </ErrorBoundary>
            </main>
        );
    }
}

export default connect(null, { getCurrency, getMapData })(MainBankComponent);
