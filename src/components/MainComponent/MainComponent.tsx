import React from "react";
import LastUpdate from "@/components/LastUpdate/LastUpdate";
import "@/components/MainComponent/MainComponent.scss";

export default function MainComponent() {
    return (
        <div className="main-block">
            <LastUpdate />
        </div>
    );
}
