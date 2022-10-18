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
import { Link, useLocation } from "react-router-dom";
import tags from "../../assets/icons/tags.svg";

const Header = () => {
    const path = useLocation();

    return (
        <div>
            <HeaderContainer>
                <HomeIconContainer>
                    <Link to="/">
                        <img src={home_icon} alt="Home icon" />
                    </Link>
                </HomeIconContainer>
                <ManageDataIcons>
                    {path.pathname === "/my_photos" ? (
                        <OrderByContainer className="order_by">
                            <FilterListOutlined className="order_icon" />
                            <span>Order by</span>
                            <select name="sort" id="sort">
                                <option value="date">date</option>
                                <option value="width">width</option>
                                <option value="height">height</option>
                                <option value="likes">likes</option>
                            </select>
                        </OrderByContainer>
                    ) : null}

                    <InputContainer>
                        <input></input>
                        <SearchOutlined />
                    </InputContainer>
                    {path.pathname === "/my_photos" ? (
                        <FavoritesContainer>
                            <img src={tags} alt="Tags to search" />
                            <span>Tags</span>
                        </FavoritesContainer>
                    ) : (
                        <Link to="/my_photos">
                            <FavoritesContainer>
                                <FavoriteBorderOutlined />
                                <span>My pics</span>
                            </FavoritesContainer>
                        </Link>
                    )}
                </ManageDataIcons>
            </HeaderContainer>
        </div>
    );
};

export default Header;
