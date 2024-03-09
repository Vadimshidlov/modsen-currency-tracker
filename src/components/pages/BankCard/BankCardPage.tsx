import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import MainBankComponent from "@/components/pages/BankCard/MainComponent/MainBankComponent";
import { RootStateType } from "@/store/reducers";
import { BankCardPagePropsType } from "@/types/BankCardPageTypes/types";

class BankCardPage extends Component<BankCardPagePropsType> {
    render() {
        const { theme } = this.props;

        return (
            <div>
                <Header theme={theme} />
                <AppTitle />
                <MainBankComponent />
                <Footer theme={theme} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(BankCardPage);
