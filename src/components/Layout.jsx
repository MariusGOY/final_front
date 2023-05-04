import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import React from "react";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default Layout;

const Container = styled.div`

  & header {
    background-color: #ffffff;
  }

  & main {
    padding: 30px;
    height: 600px;
  }
`;
