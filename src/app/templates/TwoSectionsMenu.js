import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavLinkComponent from "../components/header/NavLinkComponent";
import { useWindowDimensions } from "../hooks";
import { PATHS } from "../routes/paths";
import { device, valuePx } from "../utils/generalBreakpoints";

const widthRD = "tabletL";
const paddingItemBox = "15px 10px";

const Container = styled.article`
  display: grid;
  grid-template-columns: 2.8fr 1fr;
  gap: var(--gap-xxl);

  .content-section {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
  }

  .box-section {
    position: relative;
    padding-top: 30px;
    justify-self: end;
    width: 100%;
    max-width: 300px;
  }

  @media ${device[widthRD]} {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

const ContainerBoxMenu = styled.div`
  background: var(--color-white);
  width: 100%;
  position: sticky;
  max-width: 300px;
  top: calc(var(--header-height) * 2);
  border-radius: var(--border-radius-global);

  color: var(--color-primary);

  > h5 {
    padding: ${paddingItemBox};
    border-top: 3px solid var(--color-primary);
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;

    border-top: 1px solid var(--color-primary);

    .item_list {
      border-bottom: 1px solid var(--color-primary);
      > div {
        display: flex;
        width: 100%;
        height: 100%;

        a {
          width: 100%;
          padding: ${paddingItemBox};
          padding-left: 25px;

          &.active {
            background: var(--color-primary);
          }
        }
      }
    }
  }
`;

const BoxMenu = memo(() => {
  const location = useLocation();
  const [tree, setTree] = useState({ title: "", pathBase: "", children: [] });

  useEffect(() => {
    const arrPath = location.pathname.split("/").filter((e) => e !== "");
    Object.entries(PATHS).forEach((e) => {
      const { path, children, label } = e.at(1);
      if (path !== arrPath.at(0)) return;
      if (!children) return;
      if (path === arrPath.at(0)) {
        setTree({
          title: label,
          pathBase: path,
          children: Object.values(children).map((e) => {
            return {
              ...e,
              path: `/${path}/${e.path}`,
            };
          }),
        });
      }
    });
  }, [location.pathname]);

  return (
    <ContainerBoxMenu>
      <h5>{tree.title.toUpperCase()}</h5>
      <ul>
        {tree.children.map((item, index) => (
          <li className="item_list" key={index}>
            <NavLinkComponent label={item.label} path={item.path} level={8} />
          </li>
        ))}
      </ul>
    </ContainerBoxMenu>
  );
});

function TwoSectionsMenu({ children, gap = "var(--gap-xl)" }) {
  const { widthWindow } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (widthWindow > valuePx[widthRD]) {
      setShowMenu(true);
    }
    if (widthWindow <= valuePx[widthRD]) {
      setShowMenu(false);
    }
  }, [widthWindow]);

  return (
    <Container gap={gap}>
      <section className="content-section">{children}</section>
      {showMenu && (
        <section className="box-section">
          <BoxMenu />
        </section>
      )}
    </Container>
  );
}

export default TwoSectionsMenu;