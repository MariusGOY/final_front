import styled from "styled-components";
import React from "react";

const ZoneInfo = (props) => {
  return (
    <Container>
    <div class="cadre">
        <p></p>
        <img id="imgInfo"
          src=""
          alt=""
        />
    </div>
    </Container>
  );
};

export default ZoneInfo;

const Container = styled.div`
.cadre {
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 500px;
  padding: 20px;
  border-radius: 12px;

  & img {
    width: 100%;
    height: auto;
    max-height: 100px;
    object-fit: contain;
  }

}
`;