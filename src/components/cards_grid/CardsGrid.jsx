import React from 'react'
import {GridContainer} from "./Styled_Card_grid";
import Card from '../card';

const CardsGrid = () => {
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