import React from "react";
import {
    HeaderContainer,
    HomeIconContainer,
    ManageDataIcons,
    OrderByContainer,
    InputContainer,
    FavoritesContainer,
} from "./Styled_Header";
import home_icon from "../../assets/images/home_icon.svg";
import {
    FilterListOutlined,
    FavoriteBorderOutlined,
    SearchOutlined,
} from "@mui/icons-material";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HomeIconContainer>
                    <img src={home_icon} alt="Home icon" />
                </HomeIconContainer>
                <ManageDataIcons>
                    <OrderByContainer>
                        <FilterListOutlined />
                        <span>Order by</span>
                    </OrderByContainer>
                    <InputContainer>
                        <input></input>
                        <SearchOutlined />
                    </InputContainer>
                    <FavoritesContainer>
                        <FavoriteBorderOutlined />
                        <span>My pics</span>
                    </FavoritesContainer>
                </ManageDataIcons>
            </HeaderContainer>
        </div>
    );
};

export default Header;
