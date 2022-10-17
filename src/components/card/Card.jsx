import React from "react";
import { CardShape, AddButton, Title, BottomCardContainer } from "./Styled_Card";
import CardButton from "../card_button/CardButton";
import add_fav from "../../assets/icons/add_fav.svg";

const Card = () => {
    return (
        <CardShape>
            <BottomCardContainer>
                <AddButton>
                    <img src={add_fav} alt="Add to favourites" />
                </AddButton>
                <Title>akjsdfhkssllllllllllllllllllllliopioipokk</Title>
                <CardButton />
            </BottomCardContainer>
        </CardShape>
    );
};

export default Card;
