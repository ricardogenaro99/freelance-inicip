import React from "react";
import styled from "styled-components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

const openStyle = `
  span.top {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    width: 48px;
    left: 5px;
    top: -2px;
  }
  
  span.bottom {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    width: 48px;
    bottom: -4px;
    
  }

  span.middle {
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
    opacity: 0;
  }
`;

const Container = styled.button`
  transform: scale(0.6);
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  > div {
    position: relative;
    width: 40px;
    height: 35px;

    span {
      position: absolute;
      width: 40px;
      height: 7px;
      background: ${(props) => props.coloractive};
      border-radius: 100px;
      display: inline-block;
      left: 0;
    }

    span.top {
      top: 0;
    }

    span.middle {
      top: 14px;
    }

    span.bottom {
      bottom: 0;
    }

    ${(props) => (props.openMenu ? openStyle : "")}
  }
`;

function BurgerComponent({ onClick, openMenu }) {
  const { coloractive } = useThemeHeader();
  return (
    <Container openMenu={openMenu} onClick={onClick} coloractive={coloractive}>
      <div>
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </div>
    </Container>
  );
}

export default BurgerComponent;
