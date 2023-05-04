import styled from "styled-components";

const ZoneText = (props) => {
  return (
    <Container>
    <div class="cadre">
    <p></p>
    </div>
    </Container>
  );
};

export default ZoneText;

const Container = styled.div`
.cadre {
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 500px;
  padding: 20px;
  border-radius: 12px;

}

`;