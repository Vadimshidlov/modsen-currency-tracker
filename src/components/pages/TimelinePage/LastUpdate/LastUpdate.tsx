import React, { Component } from "react";
// import UpdateCircle from "@/assets/svg/update-circle.svg";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/LastUpdate/LastUpdate.scss";

export default class LastUpdate extends Component {
    render() {
        console.log("Render class LastUpdate extends Component");

        return (
            <div className="last-update">
                {/* <UpdateCircle width={33} height={34} /> */}
                <div className="pulsating-circle" />
                <Text className="last-update__text">Last updated at 11:59pm</Text>
            </div>
        );
    }
}
