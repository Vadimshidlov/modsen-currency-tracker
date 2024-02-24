import React from "react";
import "@/components/TextInput/TextInput.scss";

export interface ITextInput extends React.ComponentPropsWithRef<"input"> {
    className: string;
}

export function TextInput({ className, ...rest }: ITextInput) {
    return (
        <div>
            <input className={className} {...rest} />
        </div>
    );
}
