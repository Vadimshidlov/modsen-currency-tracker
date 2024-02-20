import "@/components/App/App.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import AppTitle from "@/components/AppTitle/AppTitle";
import MainComponent from "@/components/MainComponent/MainComponent";

export default function App() {
    return (
        <div className="app">
            <Header />
            <AppTitle />
            <MainComponent />
            <Outlet />
        </div>
    );
}
