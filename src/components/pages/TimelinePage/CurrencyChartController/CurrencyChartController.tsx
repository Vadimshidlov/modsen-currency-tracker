import React, { ChangeEvent, Component } from "react";
import { connect } from "react-redux";
import CurrencyCards from "@/components/pages/TimelinePage/CurrencyCards/CurrencyCards";
import CurrencyChart from "@/components/pages/TimelinePage/Chart/CurrencyChart";
import ChartDate from "@/components/pages/TimelinePage/ChartDate/ChartDate";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { RootStateType } from "@/store/reducers";
import { IcurrentCurrencyState } from "@/store/reducers/latestCurrencyReducer";
import { getCurrencyValueWithCode } from "@/utils/getCurrencyValueWithCode";
import { addDateMessage } from "@/utils/notifyMessage";
import CustomToast from "@/components/pages/TimelinePage/CustomToast/CustomToast";

export type CurrencyChartControllerPropsType = {
    // getCurrency(): (dispatch: Dispatch<CurrentCurrencyActionType>) => Promise<void>;
    currency: IcurrentCurrencyState;
};

export type CurrencyChartControllerStateType = {
    currentDate: string;
    currentCurrency: { code: string; value: number };
};

class CurrencyChartController extends Component<
    CurrencyChartControllerPropsType,
    CurrencyChartControllerStateType
> {
    constructor(props: CurrencyChartControllerPropsType) {
        super(props);

        this.state = {
            currentDate: "",
            currentCurrency: {
                code: "",
                value: 0,
            },
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }

    componentDidMount() {
        const { currency } = this.props;
        const { currency: currencyData } = currency;
        // const { getCurrency: getCurrencyData } = this.props;

        this.setState({
            currentCurrency: {
                code: "USD",
                value: getCurrencyValueWithCode(currencyData, "USD"),
            },
        });

        addDateMessage();
    }

    // componentDidUpdate(
    //     prevProps: CurrencyChartControllerPropsType,
    //     prevState: CurrencyChartControllerStateType,
    // ) {
    //     if (prevState.currentCurrency.value === 0) {
    //         const { currency } = this.props;
    //         const { currency: currencyData } = currency;
    //
    //         this.setState({
    //             currentCurrency: {
    //                 code: "USD",
    //                 value: getCurrencyValueWithCode(currencyData, "USD"),
    //             },
    //         });
    //     }
    // }

    /* componentDidUpdate() {
        // const { getCurrency: getCurrencyData } = this.props;
        // getCurrencyData();
    } */

    handleDateChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const newDate = new Date(value);

        this.setState({
            currentDate: getCurrentDate(newDate),
        });
    }

    handleCurrencyChange(e: ChangeEvent<HTMLSelectElement>) {
        const { value: currencyCode } = e.target;
        const { currency } = this.props;
        const { currency: currencyData } = currency;
        const nextValue = getCurrencyValueWithCode(currencyData, currencyCode);

        // console.log(currencyCode, "currencyCode handleCurrencyChange");
        // console.log(nextValue, "currencyCode handleCurrencyChange");

        this.setState({
            currentCurrency: {
                code: currencyCode,
                value: nextValue,
            },
        });
    }

    render() {
        const { currentDate, currentCurrency } = this.state;
        const { code, value } = currentCurrency;
        const { currency } = this.props;

        console.log(currentDate, currentCurrency, `currentDate, currentCurrency`);

        return (
            <>
                <CurrencyCards
                    currencyData={currency.currency}
                    selectedCurrencyCode={code}
                    onChange={this.handleCurrencyChange}
                />
                <div className="currency-chart__date-from-container">
                    <ChartDate dateValue={currentDate} onChange={this.handleDateChange} />
                </div>
                {currentDate && currentDate ? (
                    <CurrencyChart chartDate={currentDate} chartCurrencyValue={value} />
                ) : null}
                <CustomToast
                    message="Hello! youn need to choose date and currency for chart building"
                    duration={4000}
                />
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    currency: state.currency,
});

/* const mapDispatchToProps = () => ({
    getCurrency,
}); */

export default connect(mapStateToProps, {})(CurrencyChartController);
// export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChartController);
