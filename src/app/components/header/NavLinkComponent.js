import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";

const NavLinkStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: inherit;

  &.active {
    color: ${(props) => props.coloractive} !important;
    background-color: var(--color-primary);
  }

  @media ${device.headerRD} {
    height: var(--item-menu-height);
    span {
      padding-left: ${(props) =>
        `calc(${props.level} * var(--padding-item-menu-movil-x))`};
      padding-right: ${(props) =>
        `calc(${props.level} * var(--padding-item-menu-movil-x))`};
    }
    &:hover,
    &.active {
      color: var(--color-white);
      background-color: var(--color-secondary);
      border-left: 4px solid var(--color-orange);
    }
  }
`;

function NavLinkComponent({ path, label, onClick, level = 1 }) {
  const { coloractive } = useThemeHeader();

  return (
    <div>
      <NavLinkStyle
        to={path || label.toLowerCase()}
        className={(navData) => (navData.isActive ? "active" : undefined)}
        onClick={onClick}
        level={level}
        coloractive={coloractive}
      >
        <span>{label}</span>
      </NavLinkStyle>
    </div>
  );
}

export default NavLinkComponent;
