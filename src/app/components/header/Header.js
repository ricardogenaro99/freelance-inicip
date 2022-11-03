import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useWindowDimensions } from "../../hooks";
import { PATHS } from "../../routes";
import { device, valuePx } from "../../utils/generalBreakpoints";
import BurgerComponent from "./BurgerComponent";
import DropdownItemMenu from "./DropdownItemMenu";
import LinkComponent from "./LinkComponent";
import NavLinkComponent from "./NavLinkComponent";

const Container = styled.header`
  * {
    transition: all var(--transition);
    transition-duration: 0.1s;
  }
  width: 100%;
  > div {
    background: ${(props) => props.background};
    height: var(--header-height);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;

    display: flex;
    align-items: center;

    ${(props) =>
      props.hasShadow &&
      `
     box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.15);
    `}

    .header {
      width: 100%;
      justify-content: space-between;
      padding: var(--padding-header);
      display: flex;
      align-items: center;
      section,
      nav {
        display: flex;
        align-items: center;
      }

      nav {
        gap: var(--gap-xxl);
        font-weight: 600;
        color: ${(props) => props.color};
      }

      section {
        .title-quena {
          font-size: var(--font-size-xxl);
          color: ${(props) => props.coloractive};
          font-weight: 900;
        }
      }

      @media ${device.tabletL} {
        section {
          width: 100%;
          justify-content: space-between;
        }

        nav {
          position: absolute;
          top: var(--header-height);
          left: 0;
          background: var(--color-primary);
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100vw;
          height: calc(100vh - var(--header-height));
          transform: ${(props) =>
            props.openMenu ? "translateX(0)" : "translateX(150vw)"};
          color: var(--color-white);
          font-weight: 600;

          * {
            width: 100%;
          }
        }
      }
    }
  }
`;

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [watchMenu, setWatchMenu] = useState(false);

  const { widthWindow } = useWindowDimensions();

  const { color, background, coloractive, hasShadow } = useThemeHeader();

  const itemsNosotros = [
    {
      path: `${PATHS.nosotros.path}/${PATHS.nosotros.children.presentacion.path}`,
      anchor: "Presentación",
    },
    {
      path: `${PATHS.nosotros.path}/${PATHS.nosotros.children.equipo.path}`,
      anchor: "Equipo",
    },
  ];

  const itemsInvestigaciones = [
    {
      path: `${PATHS.investigaciones.path}/${PATHS.investigaciones.children.publicaciones.path}`,
      anchor: "Publicaciones",
    },
  ];

  useEffect(() => {
    if (widthWindow > valuePx.tabletL && watchMenu) {
      setWatchMenu(false);
    }
    if (widthWindow <= valuePx.tabletL && !watchMenu) {
      setWatchMenu(true);
    }
  }, [watchMenu, widthWindow]);

  useEffect(() => {
    if (!watchMenu) {
      setOpenMenu(false);
    }
  }, [watchMenu]);

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container
      openMenu={openMenu}
      color={color}
      background={background}
      coloractive={coloractive}
      hasShadow={hasShadow}
    >
      <div>
        <div className="header">
          <section>
            <Link
              to="/"
              className="title-quena"
              onClick={() => setOpenMenu(false)}
            >
              INICIP
            </Link>
            {watchMenu && (
              <BurgerComponent onClick={handleClickMenu} openMenu={openMenu} />
            )}
          </section>
          <nav>
            <LinkComponent
              label="Inicio"
              path="/"
              onClick={handleClickMenu}
              openMenu={openMenu}
            />
            <DropdownItemMenu
              dropdownTitle="Nosotros"
              items={itemsNosotros}
              onClickItem={handleClickMenu}
              openMenu={openMenu}
            />
            <DropdownItemMenu
              dropdownTitle="Investigaciones"
              items={itemsInvestigaciones}
              onClickItem={handleClickMenu}
              openMenu={openMenu}
            />
            <NavLinkComponent
              label="Contacto"
              onClick={handleClickMenu}
              openMenu={openMenu}
            />
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default Header;
