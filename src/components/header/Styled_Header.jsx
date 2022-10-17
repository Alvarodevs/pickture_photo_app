import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
`;

export const HomeIconContainer = styled.button`
    width: 85px;
    height: 100%;
    background-color: var(--white);
    border: none;
    margin-left: 10px;

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
    justify-content: space-around;
    font-weight: bold;
    svg {
        font-size: 30px;
        cursor: pointer;
    }
    span {
        text-align: center;
    }
    @media only screen and (max-width: 460px) {
        font-size: 11px;
    }
`;

export const OrderByContainer = styled.div`
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        svg{
            cursor: unset;
        }
    }
    select {
        position: absolute;
        transform: translate(80px, -30px);
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
        }
    }
    @media only screen and (max-width: 620px) {
        select {
            transform: translate(-10px, 10px);
        }
    }
    @media only screen and (max-width: 460px) {
        select {
            transform: translate(-20px, 11px);
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

    @media only screen and (max-width: 460px) {
        flex-direction: column;
        margin-right: 0px;
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
`;
