import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import "@/pages/HomePage/components/Header/Header.scss";
import ToggleTheme from "@/pages/HomePage/components/Header/ToggleTheme/index";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import BurgerMenuIcon from "@/assets/svg/icons8-hamburger-menu_2.svg";
import BurgerLightMenuIcon from "@/assets/svg/burger-menu-button-light.svg";
import { selectTheme } from "@/store/selectors/index";
import BlurBackground from "@/components/BlurBackground/index";
import { useBodyScroll } from "@/hooks/index";
import { useTypedSelectorHook } from "@/store/hooks/index";
import {
    BANKCARD_PAGE_PATH,
    CONTACTS_PAGE_PATH,
    HOME_PAGE_PATH,
    TIMELINE_PAGE_PATH,
} from "@/routes/constants/index";

export default function Header() {
    const { theme } = useTypedSelectorHook(selectTheme);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleCloseBurger = () => setIsBurgerOpen((prev) => !prev);

    useBodyScroll(isBurgerOpen);

    return (
        <div
            className={
                theme === "Light"
                    ? "header__container light container"
                    : "header__container container"
            }
        >
            <HeaderSvg className="header__logo" width={40} height={41} />
            {isBurgerOpen && <BlurBackground onClick={handleCloseBurger} />}
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
                    to={HOME_PAGE_PATH}
                    className={({ isActive }) =>
                        isActive ? "navigation-list__item__active" : "navigation-list__item"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={TIMELINE_PAGE_PATH}
                    className={({ isActive }) =>
                        isActive ? "navigation-list__item__active" : "navigation-list__item"
                    }
                >
                    Timeline
                </NavLink>
                <NavLink
                    to={BANKCARD_PAGE_PATH}
                    className={({ isActive }) =>
                        isActive ? "navigation-list__item__active" : "navigation-list__item"
                    }
                >
                    Bank Card
                </NavLink>
                <NavLink
                    to={CONTACTS_PAGE_PATH}
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
