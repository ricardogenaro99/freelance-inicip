import React from "react";
import styled from "styled-components";
import { windowScroll } from "../utils/generalFunctions";

const size = "40px";
const color = "var(--color-sub-primary)";

const Container = styled.button`
  width: ${size};
  height: ${size};
  background: ${color};
  color: #fff;
  border-radius: 100%;
  box-shadow: 0px 0px 6px -1px var(--color-dark);
  z-index: 10;
  transition: 0.27s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 20px;
  border: 1px solid ${color};
  &:hover {
    box-shadow: 0px 0px 5px 2px var(--color-dark);
  }

  .arrow-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid white;
  }
`;

const ButtonBackToTop = () => {
  const handleClick = () => {
    windowScroll();
  };
  return (
    <Container onClick={handleClick}>
      <div className="arrow-up"></div>
    </Container>
  );
};

export default ButtonBackToTop;
