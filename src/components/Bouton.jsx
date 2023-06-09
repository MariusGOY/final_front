import styled from "styled-components";

const Bouton = (props) => {
  return (
    <Container>
      <div>
        <button onClick={props.onClick}>
        {props.text}
        </button>
      </div>
    </Container>
  );
};

export default Bouton;

const Container = styled.div`
    & button {
        background-color: #E1EAEA;
        width: 100px;
        height: 35px;
        border-radius: 20px;
        border: 1px solid black;
        cursor: pointer;
        margin: 0 20px;
    }
  `;