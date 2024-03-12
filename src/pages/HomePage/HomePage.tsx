import React from "react";
import Header from "@/pages/HomePage/components/Header/index";
import AppTitle from "@/pages/HomePage/components/AppTitle/index";
import MainComponent from "@/pages/HomePage/components/MainComponent/index";
import Footer from "@/pages/HomePage/components/Footer/index";

function HomePage() {
    return (
        <>
            <Header />
            <AppTitle />
            <MainComponent />
            <Footer />
        </>
    );
}

export default HomePage;
