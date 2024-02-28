import React, { Component } from "react";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import MainComponent from "@/components/pages/BankCard/MainComponent/MainComponent";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

class BankCardPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <AppTitle />
                <MainComponent />
                <Footer />
            </div>
        );
    }
}

export default BankCardPage;
