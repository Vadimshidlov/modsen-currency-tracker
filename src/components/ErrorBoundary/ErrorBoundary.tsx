import React, { Component, ErrorInfo } from "react";
import "@/components/ErrorBoundary/ErrorBoundary.scss";
import Text from "@/components/pages/TimelinePage/Text/Text";

export type ErrorBoundaryPropsType = {
    children: React.ReactNode;
};

export type ErrorBoundaryStateType = {
    hasError: boolean;
};

export default class ErrorBoundary extends Component<
    ErrorBoundaryPropsType,
    ErrorBoundaryStateType
> {
    constructor(props: ErrorBoundaryPropsType) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error: ", error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <div className="fallback__container">
                    <h1 className="fallback__title">Something went wrong...</h1>
                    <Text className="fallback__info">Please, try later!</Text>
                </div>
            );
        }

        return children;
    }
}
