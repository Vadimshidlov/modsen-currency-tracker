import React, { Component } from "react";
import { TextPropsType } from "@/types/TimeLinePageTypes/types";

export default class Text extends Component<TextPropsType> {
    render() {
        const { children, className, ...rest } = this.props;

        return (
            <p className={className} {...rest}>
                {children}
            </p>
        );
    }
}
