import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Header from "@/components/pages/TimelinePage/Header/Header";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";
import MainComponent from "@/components/pages/TimelinePage/MainComponent/MainComponent";
import Footer from "@/components/pages/TimelinePage/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/components/pages/TimelinePage/CustomToast/CustomToast";

const INFO_MESSAGE = "Hello! you need to choose a date and currency for chart building";

class TimelinePage extends Component {
    render() {
        return (
            <div>
                {/* <ToastContainer
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
                /> */}
                {/* <CustomToast message={INFO_MESSAGE} duration={4000} /> */}
                <CustomToast message={INFO_MESSAGE} duration={20000} isStart />
                <Header />
                <AppTitle />
                <MainComponent />
                <Footer />
            </div>
        );
    }
}

export default TimelinePage;
