import { useState } from "react";
import "@/components/Header/ToggleTheme/ToggleTheme.scss";

export default function ToggleTheme() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label htmlFor="toggle-switch" className="toggle-switch">
            <input id="toggle-switch" type="checkbox" checked={isChecked} onChange={handleToggle} />
            <div className="slider" />
        </label>
    );
}
