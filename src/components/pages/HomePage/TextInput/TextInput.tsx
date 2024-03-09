import React from "react";
import "@/components/pages/HomePage/TextInput/TextInput.scss";
import { TextInputType } from "@/types/HomePageTypes/types";

export function TextInput({ className, ...rest }: TextInputType) {
    return (
        <div>
            <input className={className} {...rest} data-testid="text-input" />
        </div>
    );
}
