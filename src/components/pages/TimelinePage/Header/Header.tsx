import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/components/pages/HomePage/Header/Header.scss";
import ToggleTheme from "@/components/pages/TimelinePage/Header/ToggleTheme/ToggleTheme";
import { HeaderPropsType } from "@/types/TimeLinePageTypes/types";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import BurgerMenuIcon from "@/assets/svg/icons8-hamburger-menu_2.svg";
import BurgerLightMenuIcon from "@/assets/svg/burger-menu-button-light.svg";

export type HeaderStateType = {
    isBurgerOpen: boolean;
};

export default class Header extends Component<HeaderPropsType, HeaderStateType> {
    constructor(props: HeaderPropsType) {
        super(props);

        this.state = {
            isBurgerOpen: false,
        };

        this.handleCloseBurger = this.handleCloseBurger.bind(this);
    }

    componentDidMount() {
        this.bodyScrollHandler();
    }

    componentDidUpdate() {
        this.bodyScrollHandler();
    }

    handleCloseBurger() {
        this.setState((prevState) => ({
            isBurgerOpen: !prevState.isBurgerOpen,
        }));
    }

    bodyScrollHandler() {
        const { isBurgerOpen } = this.state;
        if (isBurgerOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }

    render() {
        const { theme } = this.props;
        const { isBurgerOpen } = this.state;

        return (
            <div
                className={
                    theme === "Light"
                        ? "header__container light container"
                        : "header__container container"
                }
            >
                <HeaderSvg className="header__logo" width={40} height={41} />
                {isBurgerOpen && (
                    <div
                        className="filter__blur-bg"
                        onClick={this.handleCloseBurger}
                        onKeyDown={() => {}}
                    />
                )}
                <nav
                    className={
                        isBurgerOpen
                            ? "header__navigation navigation header__navigation__burger"
                            : "header__navigation navigation"
                    }
                >
                    {isBurgerOpen && (
                        <div className="header__burger-title">
                            <HeaderSvg className="header__logo" width={40} height={41} />
                            <CloseModalIcon
                                className="modal__close-button"
                                width={25}
                                height={25}
                                onClick={this.handleCloseBurger}
                            />
                        </div>
                    )}

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
                <div className="header__buttons">
                    <ToggleTheme />
                    {theme === "Light" ? (
                        <BurgerLightMenuIcon
                            className="header__burger-button"
                            onClick={this.handleCloseBurger}
                        />
                    ) : (
                        <BurgerMenuIcon
                            className="header__burger-button"
                            onClick={this.handleCloseBurger}
                        />
                    )}
                </div>
            </div>
        );

        /* return (
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
        ); */
    }
}
