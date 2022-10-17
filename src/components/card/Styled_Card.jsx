import styled from "styled-components";

export const CardShape = styled.div`
    height: 310px;
    background-color: var(--grey-shadow);
    border-radius: 50px 5px 5px 5px;
    box-shadow: 3px 3px 5px var(--black, 0.25);

    &:hover {
        box-shadow: 3px 3px 5px var(--blue-button, 0.25);
        button {
            background-color: var(--blue-button);
            border: 2px solid var(--blue-button);
        }
    }
`;

export const Image = styled.img`
    background-image: url("https://images.unsplash.com/photo-1665655167741-6968454af1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    width: 100%;
    height: 75%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: inherit;
`;

export const Title = styled.p`
    width: 100%;
    padding: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
