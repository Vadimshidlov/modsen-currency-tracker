import "@/components/App/App.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import AppTitle from "@/components/AppTitle/AppTitle";

export default function App() {
    return (
        <div className="app">
            <Header />
            <AppTitle />
            <Outlet />
        </div>
    );
}
