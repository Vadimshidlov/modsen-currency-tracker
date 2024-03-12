import React, { Component } from "react";
import { DateInputType } from "@/types/TimeLinePageTypes";

class DateInput extends Component<DateInputType> {
    render() {
        const { className, ...rest } = this.props;

        return <input className={className} {...rest} type="date" data-testid="chart-date-input" />;
    }
}

export default DateInput;
