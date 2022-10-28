import React from "react";
import styled from "styled-components";

const size = "40px";

const Container = styled.button`
  width: ${size};
  height: ${size};
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 100%;
  box-shadow: 2px 2px 3px var(--color-secondary);
  z-index: 10;
  transition: 0.27s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 20px;
  border: 1px solid var(--color-primary);
  &:hover {
    box-shadow: 0px 0px 8px 1px var(--color-sub-primary);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container onClick={handleClick}>
      <div className="arrow-up"></div>
    </Container>
  );
};

export default ButtonBackToTop;
