import React, { Component } from "react";
import HeaderSvg from "@/assets/svg/header-svg.svg";
import Text from "@/components/pages/HomePage/Text/Text";
import "@/components/pages/HomePage/Footer/Footer.scss";

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
                        <ul className="links__nav nav">
                            <li className="nav__item">General</li>
                            <li className="nav__item">Market</li>
                            <li className="nav__item">Service</li>
                        </ul>
                        <ul className="links__nav nav">
                            <li className="nav__item">Product</li>
                            <li className="nav__item">Sparks</li>
                            <li className="nav__item">Snaps</li>
                        </ul>
                        <ul className="links__nav">
                            <li className="nav__item">Community</li>
                            <li className="nav__item">Ideas</li>
                            <li className="nav__item">Streams</li>
                        </ul>
                    </div>
                </div>

                <Text className="footer__copyright">
                    Startsup © 2023-2024, All Rights Reserved
                </Text>
            </div>
        );
    }
}
