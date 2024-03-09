import React from "react";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/LastUpdate/LastUpdate.scss";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function LastUpdate() {
    const { theme } = useTypedSelectorHook((state) => state.theme);
    const lastUpdateDate = localStorage.getItem("lastUpdateDateResult");

    return (
        <div className={theme === "Light" ? "last-update light" : "last-update"}>
            <div className="pulsating-circle" />
            <Text className="last-update__text">Last updated {lastUpdateDate}</Text>
        </div>
    );
}
