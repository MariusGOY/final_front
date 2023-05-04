import styled from "styled-components";
import Bouton from './Bouton';

const Header = (props) => {
  return (
    <Container>
      <div>
        <span>DailyDress</span>
      </div>
      <div>
      <Bouton text="⬅"/>
      <Bouton text="👔️"/>
      <Bouton text="➡"/>
      <Bouton text="⚙"/>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  & div:first-child {
    & span {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;

    }
  }

  & div:nth-child(2) {
    & input {
      border-radius: 6px;
      border: 1px solid black;
      height: 36px;
    }
  }

  & div:last-child {
    display: flex;
    margin: 0px 20px;
  }
`;