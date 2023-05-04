import styled from "styled-components";
import CardItem from "./CardItem";
import Bouton from './Bouton';
import React from "react";

const TShirt = " https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732_1280.png";
const pantalon = " https://cdn.pixabay.com/photo/2014/04/03/10/55/trousers-311729_1280.png";

const Main = (props) => {
  return (
    <Container>
      <CardItemContainer>
        <div>
            <CardItem tenu={TShirt} />
        </div>
         <div>
            <CardItem tenu={pantalon} />
        </div>
      </CardItemContainer>

    </Container>
  );
};

export default Main;

const Container = styled.main`
background-color: #E1EAEA;

`;

const CardItemContainer = styled.section`
padding: 0px 400px;
  & div:first-child {
  margin-bottom: 30px;
  }
`;
