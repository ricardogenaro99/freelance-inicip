import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoEscudoText } from "../../../assets/logos";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useWindowDimensions } from "../../hooks";
import { PATHS } from "../../routes";
import { device, size, valuePx } from "../../utils/generalBreakpoints";
import BurgerComponent from "./BurgerComponent";
import DropdownItemMenu from "./DropdownItemMenu";
import LinkComponent from "./LinkComponent";
import NavLinkComponent from "./NavLinkComponent";

const Container = styled.header`
  * {
    transition: all var(--transition);
    transition-duration: 0.13s;
    text-align: left;
  }
  width: 100%;
  > div {
    background: ${(props) => props.background};
    height: var(--header-height);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10000;

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
      max-width: ${size.desktopS};
      margin: 0 auto;

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
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            object-fit: cover;
            height: 100%;
            max-height: calc(var(--header-height) - 20px);
          }
        }
      }

      @media ${device.headerRD} {
        padding-left: 6%;
        padding-right: 6%;
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
          background: var(--color-sub-primary);
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

  const generateChildren = (itemKey) => {
    const originPath = PATHS[itemKey].path;
    return Object.entries(PATHS[itemKey].children).map((e) => {
      return {
        path: `/${originPath}/${e.at(1).path}`,
        anchor: e.at(1).label,
      };
    });
  };

  const itemsNosotros = generateChildren("nosotros");

  const itemsInvestigadores = generateChildren("investigadores");

  const itemsRevistas = generateChildren("revistas");

  const itemsInvestigaciones = generateChildren("investigaciones");

  useEffect(() => {
    if (widthWindow > valuePx.headerRD && watchMenu) {
      setWatchMenu(false);
    }
    if (widthWindow <= valuePx.headerRD && !watchMenu) {
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
              <img src={logoEscudoText} alt="logo" />
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
              dropdownTitle="Investigadores"
              items={itemsInvestigadores}
              onClickItem={handleClickMenu}
              openMenu={openMenu}
            />
            <DropdownItemMenu
              dropdownTitle="Revistas"
              items={itemsRevistas}
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
