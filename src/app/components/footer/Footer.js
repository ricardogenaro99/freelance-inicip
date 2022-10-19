import React from "react";
import styled from "styled-components";
import SectionFooter from "./SectionFooter";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  color: var(--color-white);

  > div {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .sections {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-big);
    background-color: var(--color-sub-primary);
    padding: var(--padding-footer);
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
      <div className="sections">
        <SectionFooter title="Ubicación">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, optio
          labore. Aliquid, veniam. Voluptatem ab aperiam reprehenderit iste
        </SectionFooter>
        <SectionFooter title="Contacto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, optio
          labore. Aliquid, veniam. Voluptatem ab aperiam reprehenderit iste
        </SectionFooter>
        <SectionFooter title="Siguenos">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ullam iure explicabo numquam est, dolor sit enim, cum expedita nisi
        </SectionFooter>
      </div>
      <div className="copys">© 2022 Ricardo Genaro – All rights reserved.</div>
    </Container>
  );
}

export default Footer;
