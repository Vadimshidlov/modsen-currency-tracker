import React, { Component } from "react";
import { TextPropsType } from "@/types/TimeLinePageTypes";

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
