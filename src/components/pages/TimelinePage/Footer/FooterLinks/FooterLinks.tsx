import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Text from "@/components/pages/HomePage/Text/Text";
import FooterSvgIcon from "@/assets/svg/footer/Vector.svg";

export type FooterLinkPropsType = {
    title: string;
    links: string[];
};

export type FooterLinkStateType = {
    isOpen: boolean;
};

export default class FooterLinks extends Component<FooterLinkPropsType, FooterLinkStateType> {
    constructor(props: FooterLinkPropsType) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }

    handleOpenMenu() {
        this.setState((state) => ({
            isOpen: !state.isOpen,
        }));
    }

    render() {
        const { title, links } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="footer-links__burger">
                <div
                    className={isOpen ? "footer-links__container open" : "footer-links__container"}
                >
                    <button
                        className="footer-links____title-container"
                        onClick={this.handleOpenMenu}
                    >
                        <Text className="footer-links____title">{title}</Text>
                        <FooterSvgIcon className="footer-links____title-image" />
                    </button>
                    <div className="footer-links____links">
                        {links.map((link) => (
                            <NavLink to="#" className="footer-links____item" key={link}>
                                {link}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
