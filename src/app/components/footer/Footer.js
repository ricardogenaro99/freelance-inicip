import React, { useEffect, useState } from "react";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks";
import { device, valuePx } from "../../utils/generalBreakpoints";
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
    background: #ddd;

    * {
      color: #000;
    }
  }

  .sections {
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

  @media ${device.tabletM} {
    grid-template-columns: 1fr;
  }

  .icon {
    margin-top: 4px;
    transform: scale(1.6);

    &.icon-map {
      margin-top: 24px;
    }
  }
`;

function Footer() {
  const { widthWindow } = useWindowDimensions();
  const [watchIcons, setWatchIcons] = useState(true);

  useEffect(() => {
    setWatchIcons(widthWindow > valuePx.tabletM);
  }, [widthWindow]);

  return (
    <Container>
      <div className="footer-content">
        <div className="sections">
          <SectionFooter title="Enlaces externos">
            <a
              href="https://www.escueladeposgradopnp.org/"
              target="_blank"
              rel="noreferrer"
            >
              Escuela de Posgrado - PNP
            </a>
            <a
              href="https://www.revistachapaq.com"
              target="_blank"
              rel="noreferrer"
            >
              Revista Chapaq
            </a>
          </SectionFooter>
          <SectionFooter title="Ubicación">
            <ItemInfo>
              {watchIcons && (
                <BsGeoAlt
                  className="icon icon-map"
                  color="var(--color-white)"
                />
              )}
              <p>
                Av. Guardia Civil Sur 800 - Chorrillos (Lima, Perú) 2° Piso -
                Biblioteca de la ESCPOGRA PNP
              </p>
            </ItemInfo>
          </SectionFooter>
          <SectionFooter title="Contacto">
            <ItemInfo>
              {watchIcons && (
                <BsEnvelope className="icon" color="var(--color-white)" />
              )}
              <a href="mailto:inicip@escpograpnp.com">inicip@escpograpnp.com</a>
            </ItemInfo>
            <ItemInfo>
              {watchIcons && (
                <BsTelephone className="icon" color="var(--color-white)" />
              )}
              <span>+51 - 965305887</span>
            </ItemInfo>
          </SectionFooter>
        </div>
      </div>
      <div className="copys">
        © 2022 INICIP - Todos los derechos reservados.
      </div>
    </Container>
  );
}

export default Footer;
