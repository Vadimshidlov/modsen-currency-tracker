import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import MainComponent from "@/components/pages/TimelinePage/MainComponent/MainComponent";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

class TimelinePage extends Component {
    render() {
        console.log("Render class TimelinePage extends Component");

        return (
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <Header />
                <AppTitle />
                <MainComponent />
                <Footer />
            </div>
        );
    }
}

export default TimelinePage;
