import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/generalBreakpoints";

const lineBorder = "6px groove var(--color-orange)";
const floatPosition = "-15px";

const StaticContentContainer = styled.div`
  background: var(--color-sub-secondary);
  max-width: 500px;
  padding: 45px 35px !important;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: var(--gap-big);
  transform: translate(-45%, 20%);
  margin: 20px;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: transparent;
    opacity: 0.96;
  }

  &::after {
    border-top: ${lineBorder};
    border-left: ${lineBorder};
    top: ${floatPosition};
    left: ${floatPosition};
  }

  &::before {
    border-bottom: ${lineBorder};
    border-right: ${lineBorder};
    bottom: ${floatPosition};
    right: ${floatPosition};
  }

  * {
    text-align: left;
  }

  > .static-content-text {
    * {
      font-family: "Times New Roman", Times, serif;
      line-height: 1;
      color: var(--color-orange);
    }

    display: grid;
    gap: var(--gap-xl);

    div {
      display: grid;
      gap: var(--gap-m);
      h2 {
        font-size: 5rem;
        font-weight: 800;
      }

      hr {
        border-color: var(--color-orange);
      }

      h4 {
        font-size: 1.7rem;
        font-weight: 600;
      }
    }

    h6 {
      font-size: 1.4rem;
      font-style: italic;
      font-weight: 500;
    }
  }

  @media ${device.laptopM} {
    gap: var(--gap-xxl);
    transform: translate(-0%, 5%);
  }

  @media ${device.tabletL} {
    padding: 30px !important;
  }

  @media ${device.mobileL} {
    gap: var(--gap-xl);
  }
`;

function BoxLogo() {
  return (
    <StaticContentContainer>
      <div className="static-content-text">
        <div>
          <h2>INICIP</h2>
          <hr />
          <h4>INSTITUTO DE INVESTIGACIÓN EN CIENCIAS POLICIALES</h4>
        </div>
        <h6>“Innovación e investigación, al servicio de la sociedad”</h6>
      </div>
    </StaticContentContainer>
  );
}

export default BoxLogo;
