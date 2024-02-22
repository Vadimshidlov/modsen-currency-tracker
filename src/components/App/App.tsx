import "@/components/App/App.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import AppTitle from "@/components/AppTitle/AppTitle";
import MainComponent from "@/components/MainComponent/MainComponent";
import Footer from "@/components/Footer/Footer";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function App() {
    const { theme } = useTypedSelectorHook((state) => state.theme);

    return (
        <div className={`app ${theme === "Dark" ? "" : "light-theme"}`}>
            <Header />
            <AppTitle />
            <MainComponent />
            <Footer />
            <Outlet />
        </div>
    );
}
