import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/components/pages/HomePage/Header/Header.scss";
import ToggleTheme from "@/components/pages/TimelinePage/Header/ToggleTheme/ToggleTheme";
import { HeaderPropsType } from "@/types/TimeLinePageTypes/types";

export default class Header extends Component<HeaderPropsType> {
    render() {
        const { theme } = this.props;

        return (
            <header
                className={
                    theme === "Light"
                        ? "header__container container light"
                        : "header__container container"
                }
            >
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
