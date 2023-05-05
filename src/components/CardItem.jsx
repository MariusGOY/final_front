import styled from "styled-components";
import React from "react";

const CardItem = (props) => {
  return (
    <Container>
      <div>
        <img
          src={props.tenu}
          alt=""
        />
      </div>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
    border-radius: 12px;
    width: 250px;
    height: 250px;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

    & img {
        width: 175px;
        height: 175px;
        padding: 20px 10px;
    }
`;
