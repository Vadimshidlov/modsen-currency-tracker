import React from "react";
import "@/pages/HomePage/components/AppTitle/AppTitle.scss";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import Text from "@/pages/HomePage/components/Text/index";

export default function AppTitle() {
    return (
        <div className="app-title__container">
            <div className="app-title">
                <div className="app-title__about about">
                    <div className="about__titles">
                        <h2 className="about__sub-title">Modsen Currency</h2>
                        <h1 className="about__title">Tracker</h1>
                    </div>

                    <Text className="about__text">
                        Quotes for the dollar and other international currencies.
                    </Text>
                </div>
                <HeaderSvg className="app-title__image" />
            </div>
        </div>
    );
}
