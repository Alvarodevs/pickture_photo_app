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
                    <OrderByContainer className="order_by">
                        <label for="sort">
                            <FilterListOutlined />
                            <span>Order by</span>
                        </label>
                        <select name="sort" id="sort">
                            <option value="date">date</option>
                            <option value="width">width</option>
                            <option value="height">height</option>
                            <option value="likes">likes</option>
                        </select>
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
