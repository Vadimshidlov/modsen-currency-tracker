import React from "react";
import "@/pages/HomePage/components/TextInput/TextInput.scss";
import { TextInputType } from "@/types/HomePageTypes";

export function TextInput({ className, ...rest }: TextInputType) {
    return (
        <div>
            <input className={className} {...rest} data-testid="text-input" />
        </div>
    );
}
