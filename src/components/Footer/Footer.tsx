import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import Text from "@/pages/HomePage/components/Text/index";
import "@/pages/HomePage/components/Footer/Footer.scss";
import {
    footerLinksCommunity,
    footerLinksGeneral,
    footerLinksProduct,
} from "@/pages/HomePage/components/Footer/Footer";
import { FooterPropsType } from "@/types/TimeLinePageTypes";
import FooterLinks from "@/components/Footer/FooterLinks/index";
import {
    IDEAS_PAGE_PATH,
    MARKET_PAGE_PATH,
    SERVICE_PAGE_PATH,
    SNAPS_PAGE_PATH,
    SPARKS_PAGE_PATH,
    STREAMS_PAGE_PATH,
} from "@/routes/constants/index";

export default class Footer extends Component<FooterPropsType> {
    render() {
        const { theme } = this.props;

        return (
            <div
                className={
                    theme === "Light"
                        ? "footer footer__container light"
                        : "footer footer__container"
                }
            >
                <div className="footer__main-block">
                    <div className="footer__info">
                        <div className="footer__info-title info-title">
                            <HeaderSvg width={40} height={45} />
                            <h5 className="info-title__text">Modsen Currency Tracker</h5>
                        </div>
                        <Text className="footer__info-text">
                            Since then, the company has grown organically to. Starsup is the
                            world&lsquo;s largest trading platform, with $12 billion worth of
                            currency trading and 500,000 tickets sold daily to tens of thousands of
                            traders worldwide.
                        </Text>
                    </div>
                    <div className="footer__links links">
                        <nav className="links__nav nav">
                            <Text className="nav__item">General</Text>
                            <NavLink to={MARKET_PAGE_PATH} className="nav__item">
                                Market
                            </NavLink>
                            <NavLink to={SERVICE_PAGE_PATH} className="nav__item">
                                Service
                            </NavLink>
                        </nav>
                        <nav className="links__nav nav">
                            <Text className="nav__item">Product</Text>
                            <NavLink to={SPARKS_PAGE_PATH} className="nav__item">
                                Sparks
                            </NavLink>
                            <NavLink to={SNAPS_PAGE_PATH} className="nav__item">
                                Snaps
                            </NavLink>
                        </nav>
                        <nav className="links__nav nav">
                            <Text className="nav__item">Community</Text>
                            <NavLink to={IDEAS_PAGE_PATH} className="nav__item">
                                Ideas
                            </NavLink>
                            <NavLink to={STREAMS_PAGE_PATH} className="nav__item">
                                Streams
                            </NavLink>
                        </nav>
                    </div>
                    <div className="footer-links__burgers-container">
                        <FooterLinks {...footerLinksGeneral} />
                        <FooterLinks {...footerLinksProduct} />
                        <FooterLinks {...footerLinksCommunity} />
                    </div>
                </div>

                <Text className="footer__copyright">
                    Startsup © 2023-2024, All Rights Reserved
                </Text>
            </div>
        );
    }
}
