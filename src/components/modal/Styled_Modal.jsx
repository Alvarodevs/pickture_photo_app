import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--grey-shadow);
    display: grid;
`;

export const ModalContainer = styled.div`
    width: 540px;
    height: 600px;
    border: 2px solid var(--blue-button);
    border-radius: 20px;
    margin: 85px auto auto auto;
    @media only screen and (max-width: 800px) {
        width: 380px;
        height: 580px;
    }
    @media only screen and (max-width: 490px) {
        width: 280px;
        height: 400px;
    }
    @media only screen and (max-width: 320px) {
        width: 250px;
        height: 400px;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 70%;
    text-align: center;
    position: relative;
    background-color: var(--black);
    border-radius: 20px 20px 0 0;
    a {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: var(--grey-shadow);
        padding: 5px 3px 0px 3px;
        border-radius: 20px;
        opacity: 0.8;
        &:hover {
            cursor: pointer;
        }
        svg {
            color: #fb0006;
            opacity: 1;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: scale-down;
    border-radius: 20px 20px 0 0;
    background-image: url(${(props) => props.image ? props.image : props.image2});
`;

export const DataContainer = styled.div`
    height: 30%;
`;
export const DescriptionAndIconsContainer = styled.div`
    display: flex;
    height: 60%;
`;

export const Description = styled.p`
    font-family: var(--main-font);
    height: 100%;
    width: 80%;
    padding: 0.5rem;
    font-size: 1rem;
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    height: 70%;
    width: 20%;
    .edit-icon{
        margin: 20px 0;
    } 
`;

export const DataDisplayContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 5px;
    h6 {
        font-family: var(--main-font);
        font-weight: bold;
        font-size: 0.8rem;
    }
`;

export const DownloadButton = styled.button`
    width: max-content;
    background-color: var(--blue-button);
    color: var(--white);
    border-radius: 20px;
    border: none;
    display: grid;
    padding: 3px 30px;
    margin: 30px auto;
    transform: translate(0px, -15px);
    font-size: 20px;
    &:hover {
        cursor: pointer;
        color: var(--black);
    }
`;