import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { ButtonRectangle } from "../Button";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-auto-rows: auto;
  gap: var(--gap-l);
  padding: 10px 15px;

  background: var( --color-primary-soft);
  border: 1px solid var(--color-sub-primary);
  border-radius: 2px;

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

    .button-watch {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  @media ${device.mobileL} {
    padding: 10px 5%;
  }
`;

function CardPublicacion({ id, title = "", urlImage = "", children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(id);
  };

  return (
    <Container>
      <div className="image-container">
        <img src={urlImage} alt={title} />
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

export default CardPublicacion;
