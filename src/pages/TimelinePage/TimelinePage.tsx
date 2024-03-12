import React, { Component } from "react";
import { connect } from "react-redux";
import AppTitle from "@/components/AppTitle/index";
import Footer from "@/components/Footer/index";

import MainTimeComponent from "@/pages/TimelinePage/components/MainTimeComponent/index";
import { RootStateType } from "@/store/reducers";
import { TimelinePagePropsType } from "@/types/TimeLinePageTypes";
import Header from "@/components/Header/index";

class TimelinePage extends Component<TimelinePagePropsType> {
    render() {
        const { theme } = this.props;

        return (
            <div>
                <Header theme={theme} />
                <AppTitle />
                <MainTimeComponent />
                <Footer theme={theme} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(TimelinePage);
