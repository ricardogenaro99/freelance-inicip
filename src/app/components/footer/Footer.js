import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import SectionFooter from "./SectionFooter";

const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  color: var(--color-white);

  * {
    text-align: initial;
  }

  > div {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .footer-content {
    background-color: var(--color-secondary);
  }

  .sections {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-big);
    padding: var(--padding-footer);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .copys {
    background-color: var(--color-primary);
    text-align: center;
    padding: 18px var(--padding-global-x);
  }

  @media ${device.tabletS} {
    .sections {
      grid-template-columns: 1fr;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <div className="footer-content">
        <div className="sections">
          <SectionFooter title="Ubicación">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            optio labore. Aliquid, veniam. Voluptatem ab aperiam reprehenderit
            iste
          </SectionFooter>
          <SectionFooter title="Contacto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            optio labore. Aliquid, veniam. Voluptatem ab aperiam reprehenderit
            iste
          </SectionFooter>
          <SectionFooter title="Siguenos">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ullam iure explicabo numquam est, dolor sit enim, cum expedita nisi
          </SectionFooter>
        </div>
      </div>
      <div className="copys">© 2022 INICIP – All rights reserved.</div>
    </Container>
  );
}

export default Footer;
