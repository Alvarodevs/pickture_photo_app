import { green } from "@mui/material/colors";
import styled from "styled-components";

export const CardShape = styled.div`
   height: 310px;
   background-image: url(${(props) =>
      props.image ? props.image : props.image2});
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
`;

export const Icon = styled.img`
   width: 95%;
   padding: 2px;
   transition: transform 0.5s ease-in-out;
   &:hover {
      transform: rotate(-360deg);
   }
   filter: ${({ isFav }) =>
      isFav
         ? "invert(28%) sepia(95%) saturate(3670%) hue-rotate(348deg) brightness(88%) contrast 141%)"
         : null
	};
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
   padding-right: 5px;
   cursor: pointer;
`;
