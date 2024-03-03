import React, { ChangeEvent, Component } from "react";
import { connect } from "react-redux";
import CurrencyCards from "@/components/pages/TimelinePage/CurrencyCards/CurrencyCards";
import CurrencyChart from "@/components/pages/TimelinePage/Chart/CurrencyChart";
import ChartDate from "@/components/pages/TimelinePage/ChartDate/ChartDate";
import { getCurrentDate } from "@/utils/date/getCurrentDate";
import { RootStateType } from "@/store/reducers";
import { getCurrencyValueWithCode } from "@/utils/currency/getCurrencyValueWithCode";
import CustomToast from "@/components/pages/TimelinePage/CustomToast/CustomToast";
import {
    CurrencyChartControllerPropsType,
    CurrencyChartControllerStateType,
} from "@/types/TimeLinePageTypes/types";
import Text from "@/components/pages/TimelinePage/Text/Text";

const CHART_BUILDING_MESSAGE = "Success chart building!";

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
        const { currency, theme } = this.props;

        return (
            <div
                className={
                    theme === "Light" ? "currency-chart__form light" : "currency-chart__form"
                }
            >
                <CustomToast message={CHART_BUILDING_MESSAGE} duration={2000} isStart={false} />
                <CurrencyCards
                    currencyData={currency.currency}
                    selectedCurrencyCode={code}
                    onChange={this.handleCurrencyChange}
                />
                <Text
                    className={
                        theme === "Light"
                            ? "currency-chart__date-picker-title light"
                            : "currency-chart__date-picker-title"
                    }
                >
                    Choose a start date:
                </Text>
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
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(CurrencyChartController);
