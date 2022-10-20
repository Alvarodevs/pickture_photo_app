import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--grey-shadow);
    display: grid;
`;

export const ModalContainer = styled.div`
    width: 40%;
    height: 70%;
    border: 2px solid var(--blue-button);
    border-radius: 20px;
    margin: auto;
    display: block;
    @media only screen and (max-width: 800px) {
        width: 60%;
    }
    @media only screen and (max-width: 800px) {
        width: 75%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 60%;
    margin: 0;
    border-radius: 20px 20px 0 0;
    background-image: url(${(props) => props.image ? props.image : props.image2});
`;

export const DataContainer = styled.div`
    
`;