import "@/app/App.scss";
import { useTypedSelectorHook } from "@/store/hooks/index";
import { selectTheme } from "@/store/selectors/index";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
    const { theme } = useTypedSelectorHook(selectTheme);

    return (
        <div className={`app ${theme === "Dark" ? "" : "light-theme"}`}>
            <AppRoutes />
        </div>
    );
}
