import styled from "styled-components";

export const TitleDiv = styled.h2`
  font-family: var(--main-font);
  font-size: 1.5rem;
  width: 40%;
  text-align: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  margin: auto;

  @media screen and (max-width: 645px) {
    width: 70%;
    margin: 0px 0px 0px auto;
  }

  @media screen and (max-width: 460px) {
   font-size: 1.2rem;
   margin: 0px 10% 0px auto;
  }

  @media screen and (max-width: 370px) {
   font-size: 1rem;
  }
`;
