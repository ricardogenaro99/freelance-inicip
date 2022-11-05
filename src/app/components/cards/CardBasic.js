import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-auto-rows: auto;
  gap: var(--gap-l);
  padding: 25px 30px;
  max-height: 230px;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .body-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    position: relative;
    overflow: hidden;

    .title-card {
      font-size: var(--font-size-l);
    }

    .button-watch {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }

  @media ${device.tabletS} {
    max-height: none;
    grid-template-columns: 1fr;
    grid-template-rows: 230px 200px;

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media ${device.mobileL} {
    padding: 10px 5%;
  }
`;

function CardBasic({ title = "", image = "", children, controlButtons }) {
  return (
    <Container>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="body-container">
        <h5 className="title-card">{title}</h5>
        {children}
        {controlButtons && <div className="button-watch">{controlButtons}</div>}
      </div>
    </Container>
  );
}

export default CardBasic;
