import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import LastUpdate from "@/components/pages/TimelinePage/LastUpdate/LastUpdate";
import "@/components/pages/HomePage/MainComponent/MainComponent.scss";
import CurrencyChart from "@/components/pages/TimelinePage/Chart/CurrencyChart";
import { CurrentCurrencyActionType } from "@/store/reducers/latestCurrencyReducer";
import { getCurrency } from "@/store/action-creators/getCurrency";

export type MainComponentPropsType = {
    getCurrency(): (dispatch: Dispatch<CurrentCurrencyActionType>) => Promise<void>;
};

class MainComponent extends Component<MainComponentPropsType> {
    componentDidMount() {
        const { getCurrency: getCurrencyData } = this.props;

        getCurrencyData();
    }

    render() {
        console.log("Render class MainComponent extends Component");

        return (
            <main className="main-block main-block__container">
                <LastUpdate />
                <CurrencyChart />
            </main>
        );
    }
}

const mapDispatchToProps = () => ({
    getCurrency,
});

export default connect(null, mapDispatchToProps)(MainComponent);
