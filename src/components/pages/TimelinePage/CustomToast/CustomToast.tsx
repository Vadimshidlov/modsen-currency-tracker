import React, { Component } from "react";
import "@/components/pages/TimelinePage/CustomToast/CustomToast.scss";
import { createPortal } from "react-dom";
import Text from "@/components/pages/TimelinePage/Text/Text";
import ChartObservable from "@/Observable/ChartObservable";

export type CustomToastPropsType = {
    message: string;
    duration: number;
    isStart: boolean;
};

export type CustomToastStateType = {
    visible: boolean;
};

class CustomToast extends Component<CustomToastPropsType, CustomToastStateType> {
    constructor(props: CustomToastPropsType) {
        super(props);
        this.state = {
            visible: false,
        };

        this.handleOffVisibility = this.handleOffVisibility.bind(this);
        this.handleOnVisibility = this.handleOnVisibility.bind(this);
    }

    componentDidMount() {
        console.log(this.props);

        const { isStart } = this.props;

        if (!isStart) {
            ChartObservable.subscribe(this.handleOnVisibility);
        } else {
            const { duration } = this.props;

            setTimeout(() => {
                this.handleOffVisibility();
            }, duration);
        }
    }

    componentWillUnmount() {
        const { isStart } = this.props;

        if (!isStart) {
            ChartObservable.unSubscribe(this.handleOnVisibility);
        }
    }

    handleOffVisibility() {
        this.setState({ visible: false });
    }

    handleOnVisibility() {
        this.setState({ visible: true });

        const { duration } = this.props;

        setTimeout(() => {
            this.handleOffVisibility();
        }, duration);
    }

    render() {
        const { message } = this.props;
        const { visible } = this.state;

        return createPortal(
            <div className={`toast ${visible ? "show" : "hide"}`}>
                <Text className="toast-content">{message}</Text>
            </div>,
            document.getElementById("portal"),
        );
    }
}

export default CustomToast;
