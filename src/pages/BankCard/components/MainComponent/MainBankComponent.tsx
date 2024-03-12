import React, { Component } from "react";
import { connect } from "react-redux";
import LastUpdate from "@/components/LastUpdate/index";
import "@/pages/HomePage/components/MainComponent/MainComponent.scss";
import { getCurrency, getMapData } from "@/store/action-creators/index";

import MapController from "@/pages/BankCard/components/MapController/index";
import { MainBankComponentPropsType } from "@/types/BankCardPageTypes";
import ErrorBoundary from "@/components/ErrorBoundary/index";

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
