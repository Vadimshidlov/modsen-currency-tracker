import React, { Component } from "react";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import MainBankComponent from "@/components/pages/BankCard/MainComponent/MainBankComponent";

class BankCardPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <AppTitle />
                <MainBankComponent />
                <Footer />
            </div>
        );
    }
}

export default BankCardPage;
