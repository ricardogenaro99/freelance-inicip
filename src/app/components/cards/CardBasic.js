import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { ButtonRectangle } from "../Button";

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-auto-rows: auto;
  gap: var(--gap-l);
  padding: 25px 30px;

  max-height: 280px;

  background: var(--color-white-pure);
  border-radius: var(--border-radius-global);

  box-shadow: 0px 0px 10px -1px rgb(163 160 163);

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .body-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    position: relative;
    overflow: hidden;
    .button-watch {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }

  @media ${device.tabletS} {
    max-height: none;
    grid-template-columns: 1fr;
    grid-template-rows: auto 250px;
  }

  @media ${device.mobileL} {
    padding: 10px 5%;
  }
`;

function CardBasic({ id, title = "", image = "", children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(id);
  };

  return (
    <Container>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="body-container">
        <h5>{title}</h5>
        {children}

        <ButtonRectangle className="button-watch" onClick={handleClick}>
          Ver más
        </ButtonRectangle>
      </div>
    </Container>
  );
}

export default CardBasic;
