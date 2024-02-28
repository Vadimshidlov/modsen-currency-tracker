import React, { ChangeEvent, Component } from "react";
import { connect } from "react-redux";
import CurrencyCards from "@/components/pages/TimelinePage/CurrencyCards/CurrencyCards";
import CurrencyChart from "@/components/pages/TimelinePage/Chart/CurrencyChart";
import ChartDate from "@/components/pages/TimelinePage/ChartDate/ChartDate";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { RootStateType } from "@/store/reducers";
import { IcurrentCurrencyState } from "@/store/reducers/latestCurrencyReducer";
import { getCurrencyValueWithCode } from "@/utils/getCurrencyValueWithCode";
import CustomToast from "@/components/pages/TimelinePage/CustomToast/CustomToast";

export type CurrencyChartControllerPropsType = {
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

    static getDerivedStateFromProps(
        nextProps: CurrencyChartControllerPropsType,
        prevState: CurrencyChartControllerStateType,
    ) {
        if (prevState.currentCurrency.value === 0) {
            const { currency } = nextProps;
            const { currency: currencyData } = currency;

            return {
                currentCurrency: {
                    code: "USD",
                    value: getCurrencyValueWithCode(currencyData, "USD"),
                },
            };
        }
        return null;
    }

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

        console.log(currentDate, `currentDate`);

        return (
            <div className="currency-chart__form">
                <CustomToast message="Success building!" duration={2000} isStart={false} />
                <CurrencyCards
                    currencyData={currency.currency}
                    selectedCurrencyCode={code}
                    onChange={this.handleCurrencyChange}
                />
                <ChartDate dateValue={currentDate} onChange={this.handleDateChange} />
                {currentDate ? (
                    <CurrencyChart chartDate={currentDate} chartCurrencyValue={value} />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    currency: state.currency,
});

export default connect(mapStateToProps, {})(CurrencyChartController);
