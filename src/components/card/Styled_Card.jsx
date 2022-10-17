import styled from "styled-components";

export const CardShape = styled.div`
    height: 310px;
    background-image: url("https://images.unsplash.com/photo-1665655167741-6968454af1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50px 5px 5px 5px;
    box-shadow: 3px 3px 5px var(--black, 0.25);
    display: flex;
    align-items: end;
    &:hover {
        box-shadow: 3px 3px 5px var(--blue-button, 0.25);
        button {
            background-color: var(--blue-button);
            border: 2px solid var(--blue-button);
        }
    }
`;

export const AddButton = styled.div`
    width: 40px;
    border: none;
    background-color: var(--grey-shadow, 0.7);
    translate: 0px -30px;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    border-radius: 5px 0 0 0;
    img {
        width: 95%;
        padding: 2px;
        transition: transform 0.5s ease-in-out;
        &:hover {
            transform: rotate(-360deg);
        }
    }
`;

export const BottomCardContainer = styled.div`
    height: 25%;
    width: 100%;
    background-color: var(--grey-shadow);
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 5px 5px;
`;

export const Title = styled.p`
    width: 100%;
    translate: 5px -25px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;
`;
