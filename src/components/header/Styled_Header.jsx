import styled from "styled-components";

export const HeaderContainer = styled.div`
   width: 100%;
   padding: 40px 0 10px 0;
   border-bottom: 1px solid rgba(0, 0, 0, 0.8);
   box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
   display: flex;
   align-items: center;
   position: fixed;
   top: 0;
   background-color: var(--white);
   z-index: 1;
`;

export const HomeIconContainer = styled.button`
   width: 85px;
   height: 100%;
   background-color: var(--white);
   border: none;
   
   margin-left: 20px;
   cursor: pointer;
   position: absolute;
   top: 0;
   z-index: 3;
   img {
      box-shadow: ${({ pathname }) =>
         pathname !== "/my_photos"
            ? `0px 0px 0px 2px #000000, 5px 5px 15px 5px rgb(0 0 0 / 50%);`
            : null};
      border-radius: 10px;
   };
   @media only screen and (max-width: 630px) {
      width: 70px;
      img {
         width: 100%;
      }
   };

   @media only screen and (max-width: 460px) {
      width: 50px;
   };
`;

export const ManageDataIcons = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: end;
   font-weight: bold;
   margin: 0 50px 0 10rem;
   svg {
      font-size: 30px;
      cursor: pointer;
   }
   span {
      text-align: center;
   }
   a {
      text-decoration: none;
      color: var(--black);
   }
   @media only screen and (max-width: 630px) {
      margin-right: 10px;
      margin-left: 135px;
   }
   @media only screen and (max-width: 460px) {
      width: 100%;
      font-size: 11px;
      margin-left: 80px;
   }
`;

export const OrderByContainer = styled.div`
   .order_icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: auto;
      cursor: unset;
      svg {
         cursor: unset;
      }
   }
   select {
      z-index: 1;
      position: absolute;
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
         padding: 5px;
      }
   }
   @media only screen and (max-width: 750px) {
      span {
         display: none;
      }
      select {
         margin-left: -1.5rem;
      }
   }
   @media only screen and (max-width: 640px) {
      width: fit-content;
      
      select {
         top: 4rem;
      }
      .order_icon {
         display: none;
      };
   }

   
   @media only screen and (max-width: 460px) {
      select {
         top: 3.5rem;
         margin-left: -3rem;
      }
   }
   @media only screen and (max-width: 366px) {
      select {
         top: 4.5rem;
         left: 0.5rem;
         margin-left: 0;
         z-index: 5;
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
   @media only screen and (max-width: 640px) {
      width: 100%;
      input {
         width: 70%;
      }
   }
   @media only screen and (max-width: 460px) {
      flex-direction: column;
      margin-right: 0px;
      width: 70%;
      input {
         width: 65%;
         margin: 0 10px;
      }
      svg {
         margin-bottom: 5px;
         display: none;
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
   border-radius: 10px;
   padding: 2px;
   box-shadow: ${({ pathname }) =>
      pathname === "/my_photos" ? `1px 1px 1px 2px var(--red)` : null};
   color: ${({ pathname }) =>
      pathname === "/my_photos" ? `var(--red)` : null};
   img {
      width: 50px;
      height: 35px;
   }
   svg {
      color: ${({ pathname }) =>
         pathname === "/my_photos" ? "var(--red)" : null};
   }
`;
