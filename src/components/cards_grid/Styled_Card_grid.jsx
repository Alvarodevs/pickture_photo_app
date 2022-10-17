import styled from "styled-components";

export const GridContainer = styled.div`
    background-color: aliceblue;
    margin: 100px auto;
    padding: 0 20px;
    display: grid;
    grid-auto-rows: 20rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 10px;
    overflow: hidden;
    z-index: 0;
`;