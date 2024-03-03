import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/LastUpdate/LastUpdate.scss";
import { RootStateType } from "@/store/reducers";
import { LastUpdatePropsType } from "@/types/TimeLinePageTypes/types";

class LastUpdate extends Component<LastUpdatePropsType> {
    render() {
        const { theme } = this.props;
        const lastUpdateDate = localStorage.getItem("lastUpdateDateResult");

        return (
            <div className={theme === "Light" ? "last-update light" : "last-update"}>
                <div className="pulsating-circle" />
                <Text className="last-update__text">Last updated {lastUpdateDate}</Text>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(LastUpdate);
