import React from "react";
import PropTypes from "prop-types";
import { CardButtonContainer } from "./Styled_CardButton";
import { Link, useLocation } from "react-router-dom";

const CardButton = ({ data }) => {
    const path = useLocation();
    
    const handleRedirect = () => {
        if (path.pathname === "/") {
            return `/${data.id}`;
        }
        if (path.pathname === "/my_photos") {
            return `/my_photos/${data.id}`;
        }
    };

    return (
        <Link
            to={handleRedirect()}
            state={
                {
                    id: data.id,
                    width: data.width,
                    heigth: data.heigth,
                    likes: data.likes,
                    description: data.description,
                    alt_description: data.alt_description,
                    url_full: data.url_full,
                    url_thumb: data.url_thumb,
                    url_regular: data.url_regular,
                    date: data.savedDate
                }
            }
        >
            <CardButtonContainer>
                {path.pathname === "/my_photos" ? "EDIT" : "SHOW DETAILS"}
            </CardButtonContainer>
        </Link>
    );
};

export default CardButton;

CardButton.propTypes = {
    id: PropTypes.string,
    width: PropTypes.number,
    heigth: PropTypes.number,
    likes: PropTypes.number,
    description: PropTypes.string,
    alt_description: PropTypes.string,
    url_full: PropTypes.string,
    url_thumb: PropTypes.string,
    url_regular: PropTypes.string
};
