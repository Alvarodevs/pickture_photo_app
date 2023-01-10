import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
   CardShape,
   AddButton,
   Title,
   BottomCardContainer,
   Icon,
} from "./Styled_Card";
import CardButton from "../card_button/CardButton";
import add_fav from "../../assets/icons/add_fav.svg";
import add_fav_red from "../../assets/icons/add_fav_red.svg";
import remove_fav from "../../assets/icons/delete.svg";
import {
   addFavorite,
   deleteFavorite,
   selectFavs,
} from "../../features/favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Card = ({
   id,
   width,
   heigth,
   likes,
   description,
   alt_description,
   url_full,
   url_thumb,
   url_regular,
}) => {
   const dispatch = useDispatch();
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);
   const favsInState = useSelector(selectFavs);
   //Adding to favorites in localStorage and state w. saved date

   const currentDate = () => {
      const date = new Date();
      const day = date.toLocaleDateString();
      const time = date.toLocaleTimeString();
      return `${day}, ${time}`;
   };

   let currentImage = {
      id: id,
      width: width,
      heigth: heigth,
      likes: likes,
      description: description,
      alt_description: alt_description,
      url_full: url_full,
      url_thumb: url_thumb,
      url_regular: url_regular,
		is_fav: isFav,
      savedDate: currentDate(),
   };

   function isInFavorites(id) {
      return favsInState.map((picture) => (picture.id === id ? setIsFav(true) : null));
   }

   const handleFavorite = () => {
      dispatch(addFavorite(currentImage));
		setIsFav(true);
		isInFavorites(id);
   };

   //---------------

   //Delete fav
   const handleDeleteFav = () => {
      dispatch(deleteFavorite(currentImage.id));
   };

   useEffect(() => {
      isInFavorites(id);
   }, [favsInState]);

   return (
      <CardShape image={url_regular} image2={url_full}>
         <BottomCardContainer>
            {location.pathname.includes("/my_photos") ? (
               <AddButton onClick={handleDeleteFav}>
                  <Icon
                     src={remove_fav}
                     alt="Delete from favourites"
                  />
               </AddButton>
            ) : (
               <AddButton onClick={handleFavorite}>
                  <Icon src={isFav ? add_fav_red : add_fav} alt="Add to favourites" />
                  {console.log(id, isFav)}
               </AddButton>
            )}
            <Title
            //onClick={handleOpenDescription}
            >
               {description ? description || alt_description : "Untitled"}
            </Title>
            {/* --------- SNACKBAR TO SHOW FULL DESCRIPTION ------------ */}
            {/* <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    message={description}
                    color="info"
                >
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="error"
                        onClick={handleCloseDescription}
                    />
                </Snackbar> */}
            {/* --------------------------------- */}
            <CardButton data={currentImage} />
         </BottomCardContainer>
      </CardShape>
   );
};

export default Card;

Card.propTypes = {
   id: PropTypes.string,
   width: PropTypes.number,
   heigth: PropTypes.number,
   likes: PropTypes.number,
   description: PropTypes.string,
   alt_description: PropTypes.string,
   url_full: PropTypes.string,
   url_thumb: PropTypes.string,
   url_regular: PropTypes.string,
};
