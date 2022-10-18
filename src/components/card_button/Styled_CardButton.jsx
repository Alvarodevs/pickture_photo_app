import styled from "styled-components";

export const CardButtonContainer = styled.button`
    width: max-content;
    background-color: var(--black);
    color: var(--white);
    border-radius: 20px;
    display: grid;
    padding: 3px 30px;
    margin: 5px auto;
    transform: translate(0px, -10px);
    &:hover {
        cursor: pointer;
    }
`;