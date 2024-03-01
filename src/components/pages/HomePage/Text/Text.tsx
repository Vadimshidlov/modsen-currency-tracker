import React from "react";
import { TextPropsType } from "@/types/HomePageTypes/types";

/* interface IText extends React.ComponentPropsWithRef<"p"> {
    className: string;
    children: ReactNode;
} */

export default function Text({ className, children, ...rest }: TextPropsType) {
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    );
}
