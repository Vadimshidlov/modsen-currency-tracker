import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/Footer/Footer.scss";
import FooterLinks from "@/components/pages/HomePage/Footer/FooterLinks/FooterLinks";
import {
    footerLinksCommunity,
    footerLinksGeneral,
    footerLinksProduct,
} from "@/components/pages/HomePage/Footer/Footer";

export default class Footer extends Component {
    render() {
        console.log("Render class Footer extends Component");

        return (
            <div className="footer footer__container">
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
                            <NavLink to="#" className="nav__item">
                                Market
                            </NavLink>
                            <NavLink to="#" className="nav__item">
                                Service
                            </NavLink>
                        </nav>
                        <nav className="links__nav nav">
                            <Text className="nav__item">Product</Text>
                            <NavLink to="#" className="nav__item">
                                Sparks
                            </NavLink>
                            <NavLink to="#" className="nav__item">
                                Snaps
                            </NavLink>
                        </nav>
                        <nav className="links__nav nav">
                            <Text className="nav__item">Community</Text>
                            <NavLink to="#" className="nav__item">
                                Ideas
                            </NavLink>
                            <NavLink to="#" className="nav__item">
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
