import { useState } from "react";
import "@/components/pages/HomePage/Header/ToggleTheme/ToggleTheme.scss";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function ToggleTheme() {
    const [isChecked, setIsChecked] = useState(false);
    const { switchLightTheme, switchDarkTheme } = useActions();
    const { theme } = useTypedSelectorHook((state) => state.theme);

    const handleToggle = () => {
        if (theme === "Dark") {
            switchLightTheme();
        } else {
            switchDarkTheme();
        }

        setIsChecked((prev) => !prev);
    };

    return (
        <label htmlFor="toggle-switch" className="toggle-switch">
            {null}
            <input id="toggle-switch" type="checkbox" checked={isChecked} onChange={handleToggle} />
            <div className="slider" />
        </label>
    );
}
