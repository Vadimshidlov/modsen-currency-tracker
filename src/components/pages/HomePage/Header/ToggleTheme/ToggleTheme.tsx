import "@/components/pages/HomePage/Header/ToggleTheme/ToggleTheme.scss";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function ToggleTheme() {
    const { theme } = useTypedSelectorHook((state) => state.theme);
    const { switchLightTheme, switchDarkTheme } = useActions();

    const handleToggle = () => {
        if (theme === "Dark") {
            switchLightTheme();
        } else {
            switchDarkTheme();
        }
    };

    return (
        <label htmlFor="toggle-switch" className="toggle-switch">
            {null}
            <input
                id="toggle-switch"
                type="checkbox"
                checked={theme === "Light"}
                onChange={handleToggle}
            />
            <div className="slider" />
        </label>
    );
}
