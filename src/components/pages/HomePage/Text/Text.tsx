import React from "react";
import { TextPropsType } from "@/types/HomePageTypes/types";

export default function Text({ className, children, ...rest }: TextPropsType) {
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    );
}
