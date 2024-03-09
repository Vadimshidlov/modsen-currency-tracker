import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "@/components/pages/TimelinePage/Text/Text";
import "@/components/pages/TimelinePage/ChartDate/ChartDate.scss";
import { ChartDatePropsType, ChartDateStateType } from "@/types/TimeLinePageTypes/types";
import DateInput from "@/components/pages/TimelinePage/DateInput/DateInput";
import { RootStateType } from "@/store/reducers";

class ChartDate extends Component<ChartDatePropsType, ChartDateStateType> {
    render() {
        const { onChange, dateValue, theme } = this.props;

        return (
            <div
                className={
                    theme === "Light" ? "currency-chart__date light" : "currency-chart__date"
                }
            >
                <Text className="currency-chart__date-title">From:</Text>
                <DateInput
                    type="date"
                    className="currency-chart__date-input"
                    value={dateValue}
                    onChange={onChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(ChartDate);
