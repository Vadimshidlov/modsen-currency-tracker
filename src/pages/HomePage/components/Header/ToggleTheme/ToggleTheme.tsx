import "@/pages/HomePage/components/Header/ToggleTheme/ToggleTheme.scss";
import { useActions, useTypedSelectorHook } from "@/store/hooks/index";
import { selectTheme } from "@/store/selectors/index";

export default function ToggleTheme() {
    const { theme } = useTypedSelectorHook(selectTheme);
    const { switchLightTheme, switchDarkTheme } = useActions();

    const handleToggle = () => {
        if (theme === "Dark") {
            switchLightTheme();
        } else {
            switchDarkTheme();
        }
    };

    return (
        <label htmlFor="toggle-switch" className="toggle-switch" data-testid="toggle-switch">
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
