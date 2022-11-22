import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  grid-template-columns: min(100%, 140px) 7fr;
  grid-auto-rows: auto;
  gap: var(--gap-l);
  padding: 25px 1%;
  max-height: 280px;

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
      font-size: var(--font-size-xl);
      color: var(--color-primary);
      font-weight: 700;
    }

    .button-watch {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .children {
      display: grid;
      position: relative;
      height: 100%;
      &::after {
        content: "";
        background: rgb(255, 255, 255);
        background: linear-gradient(
          180deg,
          transparent 70%,
          rgba(255, 255, 255, 1) 100%
        );
        position: absolute;
        width: 100%;
        height: 100%;
      }
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

function CardBasic({
  title = "",
  image = "",
  children,
  controlButtons,
  redirect,
}) {
  return (
    <Container>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="body-container">
        {redirect ? (
          <Link className="title-card" to={redirect}>
            {title}
          </Link>
        ) : (
          <h4 className="title-card">{title}</h4>
        )}

        <div className="children">{children}</div>

        {controlButtons && <div className="button-watch">{controlButtons}</div>}
      </div>
    </Container>
  );
}

export default CardBasic;
