import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/components/pages/HomePage/Header/Header.scss";
import ToggleTheme from "@/components/pages/TimelinePage/Header/ToggleTheme/ToggleTheme";
// import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

class Header extends Component {
    render() {
        return (
            <header className="header__container container">
                <HeaderSvg className="header__logo" width={40} height={41} />
                <nav className="header__navigation navigation">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "navigation-list__item__active" : "navigation-list__item"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/timeline"
                        className={({ isActive }) =>
                            isActive ? "navigation-list__item__active" : "navigation-list__item"
                        }
                    >
                        Timeline
                    </NavLink>
                    <NavLink
                        to="/bank-card"
                        className={({ isActive }) =>
                            isActive ? "navigation-list__item__active" : "navigation-list__item"
                        }
                    >
                        Bank Card
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive ? "navigation-list__item__active" : "navigation-list__item"
                        }
                    >
                        Contato
                    </NavLink>
                </nav>
                <ToggleTheme />
            </header>
        );
    }
}

export default Header;
