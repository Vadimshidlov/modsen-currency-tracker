import React, { Component, ReactNode } from "react";

// interface IText extends React.ComponentPropsWithRef<"p"> {}

export type TextPropsType = {
    className: string;
    children: ReactNode;
} & React.ComponentPropsWithRef<"p">;

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
