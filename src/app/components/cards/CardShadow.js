import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 15px;
`;

function CardShadow({ children }) {
  return <Container>{children}</Container>;
}

export default CardShadow;
