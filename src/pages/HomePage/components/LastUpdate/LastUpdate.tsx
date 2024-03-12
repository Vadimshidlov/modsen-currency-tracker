import React from "react";
import Text from "@/pages/HomePage/components/Text/index";
import { useTypedSelectorHook } from "@/store/hooks/index";
import { selectTheme } from "@/store/selectors/index";
import "@/pages/HomePage/components/LastUpdate/LastUpdate.scss";

const lastUpdateDate = localStorage.getItem("lastUpdateDateResult");

export default function LastUpdate() {
    const { theme } = useTypedSelectorHook(selectTheme);

    return (
        <div className={theme === "Light" ? "last-update light" : "last-update"}>
            <div className="pulsating-circle" />
            <Text className="last-update__text">Last updated {lastUpdateDate}</Text>
        </div>
    );
}
