import React, { ReactNode } from "react";

interface IText extends React.ComponentPropsWithRef<"p"> {
    className: string;
    children: ReactNode;
}

export default function Text({ className, children, ...rest }: IText) {
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    );
}
