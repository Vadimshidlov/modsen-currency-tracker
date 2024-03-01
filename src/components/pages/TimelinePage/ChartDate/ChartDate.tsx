import React, { Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import "@/components/pages/TimelinePage/ChartDate/ChartDate.scss";
import { ChartDatePropsType, ChartDateStateType } from "@/types/TimeLinePageTypes/types";

class ChartDate extends Component<ChartDatePropsType, ChartDateStateType> {
    private readonly dateRef;

    constructor(props: ChartDatePropsType) {
        super(props);
        this.dateRef = React.createRef<HTMLInputElement>();
    }

    render() {
        const { onChange, dateValue } = this.props;

        return (
            <div className="currency-chart__date">
                <Text className="currency-chart__date-title">From:</Text>
                <input
                    ref={this.dateRef}
                    type="date"
                    className="currency-chart__date-input"
                    value={dateValue}
                    onChange={onChange}
                />
            </div>
        );
    }
}

export default ChartDate;
