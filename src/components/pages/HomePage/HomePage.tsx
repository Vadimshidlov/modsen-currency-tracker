import React from "react";
import Header from "@/components/pages/HomePage/Header/Header";
import AppTitle from "@/components/pages/HomePage/AppTitle/AppTitle";
import MainComponent from "@/components/pages/HomePage/MainComponent/MainComponent";
import Footer from "@/components/pages/HomePage/Footer/Footer";

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
