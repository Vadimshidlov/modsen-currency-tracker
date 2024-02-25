import React from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/components/pages/HomePage/Header/Header.scss";
import ToggleTheme from "@/components/pages/HomePage/Header/ToggleTheme/ToggleTheme";
// import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function Header() {
    // const reduxState = useTypedSelectorHook((state) => state.theme);
    // console.log(reduxState);

    return (
        <div className="header__container container">
            <HeaderSvg className="header__logo" width={40} height={41} />
            <nav className="header__navigation navigation">
                <ul className="navigation-list">
                    <NavLink className="header__logo" to="/home">
                        <li className="navigation-list__item">Home</li>
                    </NavLink>
                    <NavLink className="header__logo" to="/timeline">
                        <li className="navigation-list__item">Timeline</li>
                    </NavLink>
                    <li className="navigation-list__item">Bank card</li>
                    <li className="navigation-list__item">Contato</li>
                </ul>
            </nav>
            <ToggleTheme />
        </div>
    );
}
