import React, { ChangeEvent, Component } from "react";
import Text from "@/components/pages/TimelinePage/Text/Text";
import "@/components/pages/TimelinePage/ChartDate/ChartDate.scss";
// import ChartObservable from "@/Observable/ChartObservable";
// import { getCurrentDate } from "@/utils/getCurrentDate";

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

        /* this.state = {
            currentDate: getCurrentDate(),
        }; */

        this.dateRef = React.createRef<HTMLInputElement>();
        // this.dateChangeHandler = this.dateChangeHandler.bind(this);
    }

    componentDidMount() {
        // ChartObservable.subscribe(this.dateChangeHandler);
        // console.log(this.dateRef.current.value, `this.dateRef.current.value`);
    }

    /* componentWillUnmount() {
        ChartObservable.unSubscribe(this.dateChangeHandler);
    } */

    /* dateChangeHandler(value: string) {
        console.log("From observable");

        const newDate = new Date(value);

        this.setState({
            currentDate: getCurrentDate(newDate),
        });
    } */

    render() {
        // const { currentDate } = this.state;
        const { onChange, dateValue } = this.props;

        return (
            <div className="currency-chart__date-from">
                <Text className="currency-chart__date-title">From:</Text>
                <input
                    ref={this.dateRef}
                    type="date"
                    className="currency-chart__date"
                    // value={currentDate}
                    value={dateValue}
                    /* onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;

                        // this.dateChangeHandler(value);
                        ChartObservable.notify(value);
                    }} */
                    onChange={onChange}
                />
            </div>
        );
    }
}

export default ChartDate;
