import React, { Fragment, memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavLinkComponent from "../components/header/NavLinkComponent";
import { Title } from "../components/sections/styles";
import { useWindowDimensions } from "../hooks";
import { PATHS } from "../routes/paths";
import { device, valuePx } from "../utils/generalBreakpoints";

const widthRD = "headerRD";
const paddingItemBox = "15px 10px";

const Container = styled.article`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: var(--gap-xxxl);

  .content-section {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
  }

  .box-section {
    position: relative;
    padding-top: 60px;
    justify-self: end;
    width: 100%;
    max-width: 300px;
    .boxes-container {
      background: var(--color-white);
      width: 100%;
      position: sticky;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      gap: var(--gap-xl);
      top: calc(var(--header-height) * 1.5);
    }
  }

  @media ${device[widthRD]} {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

const ContainerBoxMenu = styled.div`
  width: 100%;
  color: var(--color-primary);

  > h5 {
    padding: ${paddingItemBox};
    border-top: 3px solid var(--color-primary);
    font-size: 1.1em;
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

function TwoSectionsMenu({
  children,
  gap = "var(--gap-xl)",
  hasBoxMenu = true,
  customBoxs = [],
  title,
}) {
  const { widthWindow } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    setShowMenu(widthWindow > valuePx[widthRD]);
  }, [widthWindow]);

  return (
    <Container gap={gap}>
      <section className="content-section">
        {title && (
          <Title isMainContent={true} style={{ margin: "0" }} textAlign="left">
            {title}
          </Title>
        )}
        <div>{children}</div>
      </section>
      {showMenu && (
        <section className="box-section">
          <div className="boxes-container">
            {hasBoxMenu && <BoxMenu />}
            {customBoxs.map((box, i) => (
              <Fragment key={i}>{box}</Fragment>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}

export default TwoSectionsMenu;
