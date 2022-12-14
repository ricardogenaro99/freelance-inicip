import React from "react";
import styled from "styled-components";
import { ButtonBackToTop, Footer, Header, Main } from "../components";
import { ThemeHeaderProvider } from "../contexts";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--header-height) 1fr auto;
  position: relative;
  justify-items: center;
  justify-items: stretch;
`;

function TemplateLayout() {
  return (
    <Container>
      <ThemeHeaderProvider>
        <Header />
        <Main />
      </ThemeHeaderProvider>
      <Footer />
      <ButtonBackToTop />
    </Container>
  );
}

export default TemplateLayout;
