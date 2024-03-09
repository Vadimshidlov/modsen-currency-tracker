import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/components/pages/HomePage/Header/Header.scss";
import ToggleTheme from "@/components/pages/HomePage/Header/ToggleTheme/ToggleTheme";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import BurgerMenuIcon from "@/assets/svg/icons8-hamburger-menu_2.svg";
import BurgerLightMenuIcon from "@/assets/svg/burger-menu-button-light.svg";

export default function Header() {
    const { theme } = useTypedSelectorHook((state) => state.theme);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleCloseBurger = () => setIsBurgerOpen((prev) => !prev);

    useEffect(() => {
        if (isBurgerOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isBurgerOpen]);

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
                    onClick={() => {
                        setIsBurgerOpen((prev) => !prev);
                    }}
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
                            onClick={handleCloseBurger}
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
                        onClick={handleCloseBurger}
                    />
                ) : (
                    <BurgerMenuIcon className="header__burger-button" onClick={handleCloseBurger} />
                )}
            </div>
        </div>
    );
}
