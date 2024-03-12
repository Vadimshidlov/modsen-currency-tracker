import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Text from "@/pages/HomePage/components/Text/index";
import FooterSvgIcon from "@/assets/svg/footer/Vector.svg";
import { FooterLinkPropsType } from "@/types/HomePageTypes";

function FooterLinks({ title, links }: FooterLinkPropsType) {
    const [isOpen, setIsOpen] = useState(false);

    const handeOpenMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="footer-links__burger">
            <div className={isOpen ? "footer-links__container open" : "footer-links__container"}>
                <button className="footer-links____title-container" onClick={handeOpenMenu}>
                    <Text className="footer-links____title">{title}</Text>
                    <FooterSvgIcon className="footer-links____title-image" />
                </button>
                <div className="footer-links____links">
                    {links.map((link) => (
                        <NavLink
                            to={`/${link.toLowerCase()}`}
                            className="footer-links____item"
                            key={link}
                        >
                            {link}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterLinks;
