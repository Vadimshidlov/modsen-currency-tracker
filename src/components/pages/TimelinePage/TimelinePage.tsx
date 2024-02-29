import React, { Component } from "react";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import MainTimeComponent from "@/components/pages/TimelinePage/MainTimeComponent/MainTimeComponent";

class TimelinePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <AppTitle />
                <MainTimeComponent />
                <Footer />
            </div>
        );
    }
}

export default TimelinePage;
