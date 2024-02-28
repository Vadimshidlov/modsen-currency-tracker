import React, { ChangeEvent, Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import "@/components/pages/TimelinePage/ChartDate/ChartDate.scss";

export type ChartDateStateType = {
    currentDate: string;
};

export type ChartDatePropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    dateValue: string;
};

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
