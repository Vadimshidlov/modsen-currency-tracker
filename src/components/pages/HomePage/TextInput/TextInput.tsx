import React from "react";
import "@/components/pages/HomePage/TextInput/TextInput.scss";
import { TextInputType } from "@/types/HomePageTypes/types";

/* export interface ITextInput extends React.ComponentPropsWithRef<"input"> {
    className: string;
} */

export function TextInput({ className, ...rest }: TextInputType) {
    return (
        <div>
            <input className={className} {...rest} />
        </div>
    );
}
