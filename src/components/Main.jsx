import styled from "styled-components";
import CardItem from "./CardItem";
import Bouton from './Bouton';
import ZoneInfo from './ZoneInfo';
import React from "react";

const TShirt = " https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732_1280.png";
const pantalon = " https://cdn.pixabay.com/photo/2014/04/03/10/55/trousers-311729_1280.png";

const Main = (props) => {
  return (
    <Container>
        <div class="AficheChoixDiv">
            <div class="CardItemDiv">
                <CardItem tenu={TShirt} />
                <CardItem tenu={pantalon}/>
            </div>
            <div class="BoutonDiv">
                <Bouton text="❌"/>
                <Bouton text="✔️" />
            </div>
        </div>
        <div class="Cadre">
            <ZoneInfo />
            <Bouton text=""onClick={afichImg}/>
        </div>

    </Container>
  );
};

export default Main;


// fonction pour prévisualiser le vêtement que l'on veut ajouter dans l’application
const afichImg = () => {
    // vérifier si le lien est correcte
    fetch("https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732_1280.png")
        .then(response => {
              if (!response.ok) {
                throw new Error("erreur réponse");
              }
              return response.blob();
    })
        .then(blob => {
              // Convertir le blob en URL de données
              const dataUrl = URL.createObjectURL(blob);

              // Mettre à jour l'élément <img> avec l'URL de données
              const imgElement = document.getElementById("imgInfo");
              imgElement.src = dataUrl;
    })
        .catch(error => {
            console.error("Un problème est survenu lors de la récupération de l'image:", error);
    });
}

const Container = styled.main`
background-color: #E1EAEA;
display: flex;
justify-content: center;

.Cadre {
    justify-content: center;
    margin: 0px 40px;

      & button {
        background-color: #FFFFFF;
        border: 1px solid white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        margin: 20px 20px;
      }
}

.AficheChoixDiv {
    .CardItemDiv{
    margin: 0px 80px;
        & div:first-child {
        margin-bottom: 20px;
        }
    }

    .BoutonDiv{
      justify-content: center;
      display: flex;
      margin: 20px 20px
    }

    .BoutonDiv button {
    background-color: #FFFFFF;
    border: 1px solid white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 0 20px;
    }
}
`;


