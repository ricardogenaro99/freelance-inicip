import React from "react";
import styled from "styled-components";
import { stop } from "../../assets/extras";
import { device } from "../utils/generalBreakpoints";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: var(--gap-l);
  padding: var(--padding-global);
  img {
    object-fit: cover;
    max-width: 400px;
    width: 100%;
  }
  #info {
    max-width: 325px;
    h2 {
      color: var(--color-primary);
      font-size: 8rem;
    }
    h4 {
      color: var(--color-sub-primary);
      font-size: 2rem;
    }
  }

  @media ${device.tabletM} {
    flex-direction: column;
    gap: initial;
    #info {
      * {
        text-align: center;
      }
      h2 {
        font-size: 6rem;
      }
    }
  }

  @media ${device.mobileL} {
    #info {
      h2 {
        font-size: 4rem;
      }
    }
  }
`;
function NotFound() {
  return (
    <Container>
      <img src={stop} alt="page-not-found" />
      <div id="info">
        <h2>404</h2>
        <h4>Esta página no se pudo encontrar</h4>
      </div>
    </Container>
  );
}

export default NotFound;
