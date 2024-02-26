import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import {
    CurrentCurrencyActionType,
    IcurrentCurrencyState,
} from "@/store/reducers/latestCurrencyReducer";
import { getCurrency } from "@/store/action-creators/getCurrency";
import { RootStateType } from "@/store/reducers";
import "@/components/pages/TimelinePage/CurrencyCards/CurrencySelect.scss";
import { getCurrencyTitleWithCode } from "@/utils/getCurrencyWithCode";
import SelectIcon from "@/assets/svg/select-vector.svg";
// import { getRandomOhlcv } from "@/utils/getRandomOhlcv";
import ChartDate from "@/components/pages/TimelinePage/ChartDate/ChartDate";
import CurrencyCard from "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard";
import { getSecondCurrency } from "@/utils/getSecondCurrency";
// import CurrencyCard from "@/components/pages/TimelinePage/CurrencyCard/CurrencyCard";

export type CurrencyCardsPropsType = {
    getCurrency(): (dispatch: Dispatch<CurrentCurrencyActionType>) => Promise<void>;
    currency: IcurrentCurrencyState;
};

export type CurrencyCardsStateType = {
    currencyCode: string;
};

class CurrencyCards extends Component<CurrencyCardsPropsType, CurrencyCardsStateType> {
    constructor(props: CurrencyCardsPropsType) {
        super(props);

        this.state = {
            currencyCode: "USD",
        };
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    }

    componentDidMount() {
        const { getCurrency: getCurrencyData } = this.props;

        getCurrencyData();

        // console.log(getRandomOhlcv(1));
    }

    componentDidUpdate() {
        const { getCurrency: getCurrencyData } = this.props;

        getCurrencyData();
    }

    handleChangeCurrency(event: React.ChangeEvent<HTMLSelectElement>) {
        const { value } = event.target;

        this.setState({
            currencyCode: value,
        });
    }

    render() {
        const { currency } = this.props;
        const { currencyCode } = this.state;
        const { data } = currency.currency;
        const { secondCurrencyValue } = getSecondCurrency(currency.currency, currencyCode);

        return (
            <div className="currency-chart__form">
                <div className="currency-chart__select-container">
                    <select
                        className="currency-chart__select"
                        name="currency-chart-select"
                        id=""
                        value={currencyCode}
                        onChange={this.handleChangeCurrency}
                    >
                        {Object.keys(data).map((element) => (
                            <option
                                className="currency-chart-select__option"
                                value={element}
                                key={element}
                            >
                                {getCurrencyTitleWithCode(element)}
                            </option>
                        ))}
                    </select>
                    <div className="currency-chart__icon">
                        <SelectIcon width={20} height={15} />
                    </div>
                </div>
                <div className="currency-chart__date-from-container">
                    <ChartDate />
                </div>
                <div className="currency-chart__selected-card">
                    <CurrencyCard currencyCode={currencyCode} currencyValue={secondCurrencyValue} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    currency: state.currency,
});

const mapDispatchToProps = () => ({
    getCurrency,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCards);
