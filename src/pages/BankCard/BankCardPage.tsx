import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "@/components/Header/index";

import AppTitle from "@/components/AppTitle/index";
import Footer from "@/components/Footer/index";

import { RootStateType } from "@/store/reducers";
import { BankCardPagePropsType } from "@/types/BankCardPageTypes";
import MainBankComponent from "@/pages/BankCard/components/MainComponent/index";

class BankCardPage extends Component<BankCardPagePropsType> {
    render() {
        const { theme } = this.props;

        return (
            <>
                <Header theme={theme} />
                <AppTitle />
                <MainBankComponent />
                <Footer theme={theme} />
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(BankCardPage);
