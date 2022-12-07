import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  h3 {
    font-size: 1.5rem;
    border-bottom: 1px solid var(--color-primary);
  }
`;

function TitleWithSeparator({ title }) {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
}

export default TitleWithSeparator;
