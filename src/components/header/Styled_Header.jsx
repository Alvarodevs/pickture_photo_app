import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: var(--white);
    z-index: 1;
`;

export const HomeIconContainer = styled.button`
    width: 85px;
    height: 100%;
    background-color: var(--white);
    border: none;
    margin-left: 10px;
    cursor: pointer;
    @media only screen and (max-width: 500px) {
        img {
            width: 100%;
        }
    }
`;

export const ManageDataIcons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    font-weight: bold;
    margin-right: 50px;
    svg {
        font-size: 30px;
        cursor: pointer;
    }
    span {
        text-align: center;
    }
    a {
        text-decoration: none;
        color: var(--black);
    }
    @media only screen and (max-width: 630px) {
        margin-right: 10px;
    }
    @media only screen and (max-width: 460px) {
        width: 80%;
        font-size: 11px;
    }
`;

export const OrderByContainer = styled.div`
    .order_icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: auto;
        cursor: unset;
        svg {
            cursor: unset;
        }
    }
    select {
        position: absolute;
        border-radius: 10px;
        font-size: 15px;
        background-color: var(--grey-shadow);
        margin-left: 10px;
        cursor: pointer;
        &:focus-visible {
            border: 0.5px solid var(--black);
        }
        option {
            background-color: var(--grey-shadow);
            border-radius: 20px;
            margin: 10px;
            padding: 5px;
        }
    }
    @media only screen and (max-width: 640px) {
        width: fit-content;
        span {
            font-size: 12px;
        }
        select {
            transform: translate(-65px, 25px);
            margin: auto;
        }
    }
    @media only screen and (max-width: 460px) {
        select {
            transform: translate(-65px, 25px);
        }
    }
    @media only screen and (max-width: 366px) {
        span {
            display: block;
        }
        select {
            transform: translate(-5px, 10px);
        }
    }
`;


export const InputContainer = styled.div`
    width: 70%;
    height: 100%;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
    input {
        width: 70%;
        font-size: 20px;
        font-family: var(--secondary-font);
        border: 0.5px solid var(--black);
        box-shadow: 0px 3px 6px var(--black, 0.25);
        background-color: var(--grey-shadow);
        padding: 8px 10px;
        margin-right: 10px;
        border-radius: 20px;
        &:focus-visible {
            outline: none;
        }
    }
    svg {
        position: absolute;
        right: 15px;
    }
    @media only screen and (max-width: 640px) {
        width: 65%;
        input {
            width: 90%;
        }
    }
    @media only screen and (max-width: 460px) {
        flex-direction: column;
        margin-right: 0px;
        width: 60%;
        input {
            width: 90%;
            margin: 0 10px;
        }
        svg {
            margin-bottom: 5px;
        }
    }

    @media only screen and (max-width: 350px) {
        svg {
            display: none;
        }
    }
`;
export const FavoritesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 50px;
        height: 35px;
    }
    
`;
