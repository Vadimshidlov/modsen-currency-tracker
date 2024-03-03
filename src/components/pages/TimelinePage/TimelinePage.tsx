import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import MainTimeComponent from "@/components/pages/TimelinePage/MainTimeComponent/MainTimeComponent";
import { RootStateType } from "@/store/reducers";
import { TimelinePagePropsType } from "@/types/TimeLinePageTypes/types";

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
