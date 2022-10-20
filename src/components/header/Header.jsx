import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { searchAsync } from "../../features/search/searchSlice";

const Header = () => {
    const [query, setQuery] = useState("");
    const path = useLocation();
    const dispatch = useDispatch();

    const onSearch = (e) => {
        dispatch(searchAsync(query))
    };

    return (
        <div>
            <HeaderContainer>
                <HomeIconContainer>
                    <Link to="/">
                        <img src={home_icon} alt="Home icon" />
                    </Link>
                </HomeIconContainer>
                <ManageDataIcons>
                    {/* Display sort icon if location "/my_photos" */}
                    {path.pathname === "/my_photos" ? (
                        <OrderByContainer className="order_by">
                            <FilterListOutlined className="order_icon" />
                            <span>Order by</span>
                            {/* Pending change for satyling not select tag to use */}
                            <select name="sort" id="sort">
                                <option value="date">date</option>
                                <option value="width">width</option>
                                <option value="height">height</option>
                                <option value="likes">likes</option>
                            </select>
                        </OrderByContainer>
                    ) : null}

                    <InputContainer>
                        <input
                            id="input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onSubmit={(e) => onSearch}
                        />
                        <SearchOutlined onClick={onSearch}/>
                    </InputContainer>

                    {/* Display link to my_photos or search by tag if location "/" or "/my_photos" */}
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
