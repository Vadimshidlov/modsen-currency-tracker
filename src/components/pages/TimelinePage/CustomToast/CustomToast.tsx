import React, { Component } from "react";
import "@/components/pages/TimelinePage/CustomToast/CustomToast.scss";
import Text from "@/components/pages/TimelinePage/Text/Text";
import ChartObservable from "@/Observable/ChartObservable";

export type CustomToastPropsType = {
    message: string;
    duration: number;
};
export type CustomToastStateType = {
    visible: boolean;
};

class CustomToast extends Component<CustomToastPropsType, CustomToastStateType> {
    constructor(props: CustomToastPropsType) {
        super(props);
        this.state = {
            visible: true,
        };

        this.handleOffVisibility = this.handleOffVisibility.bind(this);
        this.handleOnVisibility = this.handleOnVisibility.bind(this);

        ChartObservable.subscribe(this.handleOnVisibility);
    }

    componentDidMount() {
        const { duration } = this.props;

        setTimeout(() => {
            this.handleOffVisibility();
        }, duration);
    }

    componentDidUpdate() {
        const { duration } = this.props;

        setTimeout(() => {
            this.handleOffVisibility();
        }, duration);
    }

    handleOffVisibility() {
        this.setState({ visible: false });
    }

    handleOnVisibility() {
        this.setState({ visible: true });
    }

    render() {
        const { message } = this.props;
        const { visible } = this.state;
        return (
            <div className={`toast ${visible ? "show" : "hide"}`}>
                <Text className="toast-content">{message}</Text>
            </div>
        );
    }
}

export default CustomToast;
