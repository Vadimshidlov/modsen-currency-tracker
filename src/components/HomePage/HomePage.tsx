import React from "react";
import Header from "@/components/Header/Header";
import AppTitle from "@/components/AppTitle/AppTitle";
import MainComponent from "@/components/MainComponent/MainComponent";
import Footer from "@/components/Footer/Footer";

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
