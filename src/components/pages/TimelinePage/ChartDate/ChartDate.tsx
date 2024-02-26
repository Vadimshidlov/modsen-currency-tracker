/* eslint-disable react/no-unused-state */
import React, { ChangeEvent, Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import ChartObservable from "@/Observable/ChartObservable";
import { getCurrentDate } from "@/utils/getCurrentDate";

export type ChartDateStateType = {
    currentDate: string;
};

export type ChartDatePropsType = object;

class ChartDate extends Component<ChartDatePropsType, ChartDateStateType> {
    constructor(props: ChartDatePropsType) {
        super(props);

        this.state = {
            currentDate: getCurrentDate(),
        };
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
    }

    componentDidMount() {
        ChartObservable.subscribe(this.dateChangeHandler);
    }

    componentWillUnmount() {
        ChartObservable.unSubscribe(this.dateChangeHandler);
    }

    dateChangeHandler(value: string) {
        console.log("From observable");

        const newDate = new Date(value);

        this.setState({
            currentDate: getCurrentDate(newDate),
        });
    }

    render() {
        // const { currentDate } = this.state;

        return (
            <div className="currency-chart__date-from">
                <Text className="currency-chart__date-title">From:</Text>
                <input
                    type="date"
                    className="currency-chart__date"
                    // value={currentDate}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;

                        // this.dateChangeHandler(value);
                        ChartObservable.notify(value);
                    }}
                />
            </div>
        );
    }
}

export default ChartDate;
