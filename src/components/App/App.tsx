import "@/components/App/App.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import AppTitle from "@/components/AppTitle/AppTitle";
import MainComponent from "@/components/MainComponent/MainComponent";
import Footer from "@/components/Footer/Footer";

export default function App() {
    return (
        <div className="app">
            <Header />
            <AppTitle />
            <MainComponent />
            <Footer />
            <Outlet />
        </div>
    );
}
