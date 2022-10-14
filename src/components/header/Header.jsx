import React from "react";
import { HeaderContainer, HomeIconContainer } from "./Styled_Header";
import home_icon from "../../assets/images/home_icon.svg";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HomeIconContainer>
                    <img src={home_icon} alt="Home icon" />
                </HomeIconContainer>
            </HeaderContainer>
        </div>
    );
};

export default Header;
