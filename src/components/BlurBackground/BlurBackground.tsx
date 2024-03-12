import React from "react";
import "@/components/BlurBackground/BlurBackground.scss";

function BlurBackground({ onClick }: { onClick: () => void }) {
    return <div className="filter__blur-bg" onClick={onClick} onKeyDown={onClick} />;
}

export default BlurBackground;
