import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { searchAsync } from "../../features/search/searchSlice";
import { orderBy, selectFavs } from "../../features/favorites/favoritesSlice";
import Title from "../title";

const Header = () => {
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("savedDate");
  const path = useLocation();
  const dispatch = useDispatch();
  const favsPics = useSelector(selectFavs);

  const handleOption = (e) => {
    console.log(e.target);
    setOption(e.target.value);
  };

  useEffect(() => {
    dispatch(orderBy({ pics: favsPics, options: option }));
  }, [dispatch, option]);

  const onSearch = () => {
    dispatch(searchAsync(query));
    setQuery("");
  };

  const keyPressTrigger = (e) => {
    if (e.charCode === 13) {
      return onSearch();
    }
  };

  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <HomeIconContainer pathname={path.pathname}>
            <img src={home_icon} alt="Home icon" />
          </HomeIconContainer>
        </Link>
        <ManageDataIcons>
          {/* Display sort icon if location "/my_photos" */}
          {path.pathname === "/my_photos" ? (
            <OrderByContainer className="order_by">
              <FilterListOutlined className="order_icon" />
              <span>Order by</span>
              
              <select
                label="sort"
                onChange={handleOption}
              >
                <option value="savedDate">date</option>
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
              onKeyDown={(e) => keyPressTrigger(e)}
            />
            <SearchOutlined onClick={onSearch} />
          </InputContainer>

          {/* Display link to my_photos or search by tag if location "/" or "/my_photos" */}
          {path.pathname === "/my_photos" ? (
            // <FavoritesContainer>
            //    <img src={tags} alt="Tags to search" />
            //    <span>Tags</span>
            // </FavoritesContainer>
            <FavoritesContainer pathname={path.pathname.includes("my_photos")}>
              <FavoriteBorderOutlined />
              <span>My pics</span>
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
