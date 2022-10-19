import React, {useEffect} from 'react'
import {GridContainer} from "./Styled_Card_grid";
import Card from '../card';
import { useSelector, useDispatch } from 'react-redux';
import { searchAsync, selectImages } from "../../features/search/searchSlice";

const CardsGrid = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  console.log(images);
  
  // useEffect(() => {
  //   dispatch(searchAsync(""))
  // }, [])
  
  return (
      
          <GridContainer>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
          </GridContainer>
  );
}

export default CardsGrid;