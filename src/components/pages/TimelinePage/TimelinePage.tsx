import React, { Component } from "react";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import MainComponent from "@/components/pages/TimelinePage/MainComponent/MainComponent";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";

class TimelinePage extends Component {
    render() {
        console.log("Render class TimelinePage extends Component");

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

export default TimelinePage;
