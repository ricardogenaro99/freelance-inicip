import React from "react";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-content {
    background-color: var(--color-secondary);
  }

  .sections {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
    display: flex;
    justify-content: space-evenly;
    gap: var(--gap-big);
    padding: var(--padding-footer);
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }

  .copys {
    background-color: var(--color-primary);
    text-align: center;
    padding: 18px var(--padding-global-x);
  }

  @media ${device.tabletM} {
    .sections {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;

  > {
    &:nth-child(1) {
      margin-top: 4px;
      transform: scale(1.6);
    }
  }
`;

function Footer() {
  return (
    <Container>
      <div className="footer-content">
        <div className="sections">
          <SectionFooter title="Enlaces externos">
            <p>Enlace 1</p>
            <p>Enlace 2</p>
          </SectionFooter>
          <SectionFooter title="Ubicación">
            <ItemInfo>
              <BsGeoAlt color="var(--color-white)" />
              <p>
                Av. Guardia Civil Sur 800 - Chorrillos (Lima, Perú)
                <br />
                2° Piso - Biblioteca de la ESCPOGRA PNP
              </p>
            </ItemInfo>
          </SectionFooter>
          <SectionFooter title="Contacto">
            <ItemInfo>
              <BsEnvelope color="var(--color-white)" />
              <a href="mailto:inicip@escpograpnp.com">inicip@escpograpnp.com</a>
            </ItemInfo>
            <ItemInfo>
              <BsTelephone color="var(--color-white)" />
              <span>+51 - 965305887</span>
            </ItemInfo>
          </SectionFooter>
        </div>
      </div>
      <div className="copys">© 2022 INICIP – All rights reserved.</div>
    </Container>
  );
}

export default Footer;
