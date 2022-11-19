import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";

const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: inherit;

  &.active {
    color: ${(props) => props.coloractive};
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

function LinkComponent({ path, label, onClick, level = 1 }) {
  const { coloractive } = useThemeHeader();
  const location = useLocation();

  const isActive = () =>
    location.pathname === path || location.pathname === label.toLowerCase();

  return (
    <div>
      <LinkStyle
        to={path || label.toLowerCase()}
        onClick={onClick}
        level={level}
        coloractive={coloractive}
        className={isActive() ? "active" : ""}
      >
        <span>{label}</span>
      </LinkStyle>
    </div>
  );
}

export default LinkComponent;
