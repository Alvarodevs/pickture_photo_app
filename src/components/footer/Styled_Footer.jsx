import styled from "styled-components";

export const FooterContainer = styled.div`
    position: fixed;
    background-color: var(--white);
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    box-shadow: 0px -3px 6px -3px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-around;
    overflow-y: hidden;
`;

export const Mail = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 520px){
        display: block;
        padding-top: 10px;
    }
`;

export const MailContainer = styled.div`
    display: flex;
    align-items: center;
    svg {
        margin-right: 5px;
    }
    span,
    a {
        font-family: var(--secondary-font);
        margin-right: 20px;
        text-decoration: none;
        color: var(--black);
    }
`;

export const MediaLinks = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    svg {
        color: var(--red);
        margin: 0 5px;
    }
    span {
        display: flex;
        align-items: center;
        margin-right: 10px;
        font-family: var(--secondary-font);
    }
    @media only screen and (max-width: 520px) {
        display: block;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        font-family: var(--secondary-font);
        margin-right: 10px;
        text-decoration: none;
        color: var(--black);
    }
`;
