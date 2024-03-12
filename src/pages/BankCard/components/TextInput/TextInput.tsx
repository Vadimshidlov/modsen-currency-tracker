import React, { Component } from "react";
import { TextInputType } from "@/types/HomePageTypes";

class TextInput extends Component<TextInputType> {
    render() {
        const { className, ...rest } = this.props;

        return <input className={className} {...rest} type="text" />;
    }
}

export default TextInput;
