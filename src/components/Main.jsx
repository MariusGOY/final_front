import styled from "styled-components";
import CardItem from "./CardItem";
import Bouton from './Bouton';
import ZoneText from './ZoneText';
import React from "react";

const TShirt = " https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732_1280.png";
const pantalon = " https://cdn.pixabay.com/photo/2014/04/03/10/55/trousers-311729_1280.png";

const Main = (props) => {
  return (
    <Container>
        <div class="CardItemDiv">
        <CardItem tenu={TShirt} />
        <CardItem tenu={pantalon} />
        </div>
        <div class="cadre">
            <ZoneText />
            <div class="BoutonDiv">
            <Bouton text="❌"/>
            <Bouton text="✔️" />
            </div>
        </div>
    </Container>
  );
};

export default Main;

const Container = styled.main`
background-color: #E1EAEA;
display: flex;
justify-content: center;

.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cadre {
    justify-content: center;
    margin: 0px 40px;

    .BoutonDiv{
        justify-content: center;
        display: flex;
        margin: 20px 20px
    }

    .BoutonDiv button {
     background-color: #FFFFFF;
     margin: 0 40px;
    }

}

.CardItemDiv {
  & div:first-child {
    margin-bottom: 40px;
  }
}

`;


