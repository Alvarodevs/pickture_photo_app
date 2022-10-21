import React from "react";
import PropTypes from "prop-types";
import {
    CardShape,
    AddButton,
    Title,
    BottomCardContainer,
} from "./Styled_Card";
import CardButton from "../card_button/CardButton";
import add_fav from "../../assets/icons/add_fav.svg";
import remove_fav from "../../assets/icons/delete.svg";
import {
    addFavorite,
    deleteFavorite,
} from "../../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//import { Snackbar, IconButton } from "@mui/material";

const Card = ({id, width, heigth, likes, description, alt_description, url_full, url_thumb,}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    // const [open, setOpen] = useState(false);

    // const handleOpenDescription = (e) => {
    //     setOpen(true);
    // };
    // const handleCloseDescription = (e, reason) => {
    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     setOpen(false);
    // };


    //-------------
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
        savedDate: currentDate(),
    };

    const handleFavorite = () => {
        dispatch(addFavorite(currentImage));
    };

    //---------------

    //Delete fav
    const handleDeleteFav = () => {
        dispatch(deleteFavorite(currentImage.id));
    }

    return (
        <CardShape image={url_thumb} image2={url_full}>
            <BottomCardContainer>
                {location.pathname.includes("/my_photos") ? (
                    <AddButton onClick={handleDeleteFav}>
                        <img src={remove_fav} alt="Delete from favourites" />
                    </AddButton>
                ) : (
                    <AddButton onClick={handleFavorite}>
                        <img src={add_fav} alt="Add to favourites" />
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
};
