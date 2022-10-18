import styled from "styled-components";

export const GridContainer = styled.div`
    margin: 100px auto;
    padding: 0 20px;
    display: grid;
    grid-auto-rows: 20rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 0.7fr));
    gap: 25px;
    overflow: hidden;
    justify-content: center;
`;