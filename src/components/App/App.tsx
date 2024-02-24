import "@/components/App/App.scss";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import AppRoutes from "@/components/AppRoutes";

export default function App() {
    const { theme } = useTypedSelectorHook((state) => state.theme);

    return (
        <div className={`app ${theme === "Dark" ? "" : "light-theme"}`}>
            {/* <Header />
            <AppTitle />
            <MainComponent />
            <Footer /> */}
            {/* <Outlet /> */}
            {/* <HomePage />
            <TimelinePage /> */}
            <AppRoutes />
        </div>
    );
}
