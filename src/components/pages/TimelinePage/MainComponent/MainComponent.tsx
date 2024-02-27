import React, { Component } from "react";
import { connect } from "react-redux";
// import { Dispatch } from "redux";
import LastUpdate from "@/components/pages/TimelinePage/LastUpdate/LastUpdate";
import "@/components/pages/HomePage/MainComponent/MainComponent.scss";
// import CurrencyChart from "@/components/pages/TimelinePage/Chart/CurrencyChart";
// import { CurrentCurrencyActionType } from "@/store/reducers/latestCurrencyReducer";
import { getCurrency } from "@/store/action-creators/getCurrency";
// import CurrencyCards from "@/components/pages/TimelinePage/CurrencyCards/CurrencyCards";
import CurrencyChartController from "@/components/pages/TimelinePage/CurrencyChartController/CurrencyChartController";

export type MainComponentPropsType = {
    getCurrency: () => Promise<void>;
};

class MainComponent extends Component<MainComponentPropsType> {
    componentDidMount() {
        // const { getCurrency } = this.props;

        // console.log("getCurrencyData()");

        // eslint-disable-next-line react/destructuring-assignment
        this.props.getCurrency();
    }

    componentDidUpdate() {
        // const { getCurrency: getCurrencyData } = this.props;

        // console.log("getCurrencyData()");

        // eslint-disable-next-line react/destructuring-assignment
        this.props.getCurrency();
    }

    render() {
        console.log("Render class MainComponent extends Component");

        return (
            <main className="main-block main-block__container">
                <LastUpdate />
                <CurrencyChartController />
            </main>
        );
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<CurrentCurrencyActionType>) => ({
//     getCurrency: () => dispatch(getCurrency()),
// });

export default connect(null, { getCurrency })(MainComponent);
