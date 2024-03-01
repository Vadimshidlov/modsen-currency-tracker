import React, { Component } from "react";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/LastUpdate/LastUpdate.scss";

export default class LastUpdate extends Component {
    render() {
        const lastUpdateDate = localStorage.getItem("lastUpdateDateResult");

        return (
            <div className="last-update">
                {/* <UpdateCircle width={33} height={34} /> */}
                <div className="pulsating-circle" />
                <Text className="last-update__text">Last updated {lastUpdateDate}</Text>
                {/* <Text className="last-update__text">Last updated at 11:59pm</Text> */}
            </div>
        );
    }
}
