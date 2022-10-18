import React from "react";
import { CardButtonContainer } from "./Styled_CardButton";
import { useLocation} from "react-router-dom";

const CardButton = () => {
    const path = useLocation();

    return (
        <CardButtonContainer>
            {path.pathname === "/my_photos" ? "EDIT" : "SHOW DETAILS"}
        </CardButtonContainer>
    );
};

export default CardButton;
