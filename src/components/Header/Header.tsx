import React from "react";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/components/Header/Header.scss";
import ToggleTheme from "@/components/Header/ToggleTheme/ToggleTheme";

export default function Header() {
    return (
        <div className="header__container">
            <div className="header__logo">
                <HeaderSvg width={40} height={41} />
            </div>
            <nav className="header__navigation navigation">
                <ul className="navigation-list">
                    <li className="navigation-list__item">Home</li>
                    <li className="navigation-list__item">Timeline</li>
                    <li className="navigation-list__item">Bank card</li>
                    <li className="navigation-list__item">Contato</li>
                </ul>
            </nav>
            <ToggleTheme />
        </div>
    );
}
