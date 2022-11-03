import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useWindowDimensions } from "../../hooks";
import { device, valuePx } from "../../utils/generalBreakpoints";
import NavLinkComponent from "./NavLinkComponent";

const Container = styled.div`
  position: relative;
  display: inline-block;
  color: inherit;
  * {
    font-weight: inherit;
  }

  .dropdown_activator {
    background: inherit;
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: inherit;
    cursor: pointer;
    width: 100%;
    gap: var(--gap-s);
    color: inherit;
    &.active {
      color: ${(props) => props.coloractive};
    }
  }

  .dropdown_item_list {
    background: var(--color-white);
    margin: 0;
    z-index: 10000;
    position: absolute;
    box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius-global);
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .item_list a {
    padding: var(--padding-item-menu-movil);
    color: var(--color-black);
    &:hover {
      background: var(--color-primary);
      color: var(--color-white);
    }
  }

  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;

    * {
      color: var(--color-white);
    }

    .dropdown_activator {
      > * {
        width: auto !important;
      }
      height: var(--item-menu-height);

      padding-left: var(--padding-item-menu-movil-x);
      padding-right: var(--padding-item-menu-movil-x);

      &.active {
        color: var(--color-white);
      }
    }

    .dropdown_item_list {
      border-radius: initial;
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      background-color: var(--color-sub-primary);
      box-shadow: initial;
    }

    .item_list a {
      padding: initial;

      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }
`;

function DropdownItemMenu({
  items = [],
  dropdownTitle = "",
  onClickItem,
  openMenu,
}) {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [firstOpenResponse, setFirstOpenResponse] = useState(false);
  const { widthWindow } = useWindowDimensions();
  const { coloractive } = useThemeHeader();

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDown = () => {
    if (widthWindow > valuePx.tabletL) {
      setIsOpen(false);
    }
    onClickItem();
  };

  const keyHandler = (event) => {
    if (event.key === "Escape" && isOpen) {
      closeDropDown();
    }
  };

  const clickOutsideHandler = (event) => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      if (window.innerWidth > valuePx.tabletL) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    setIsLocation(
      location.pathname.split("/").includes(dropdownTitle.toLowerCase())
    );
  }, [dropdownTitle, location]);

  useEffect(() => {
    if (widthWindow > valuePx.tabletL && firstOpenResponse) {
      setFirstOpenResponse(false);
    }
    if (widthWindow <= valuePx.tabletL && !firstOpenResponse) {
      setFirstOpenResponse(true);
    }
  }, [firstOpenResponse, widthWindow]);

  useEffect(() => {
    if (!openMenu) {
      setIsOpen(false);
    }
  }, [openMenu]);

  useEffect(() => {
    if (!firstOpenResponse) {
      setIsOpen(false);
    }
  }, [firstOpenResponse]);

  useEffect(() => {
    if (widthWindow > valuePx.tabletL) {
      if (isOpen) {
        dropdownListRef.current.querySelector("a").focus();
        document.addEventListener("mousedown", clickOutsideHandler);
      } else {
        document.addEventListener("mousedown", clickOutsideHandler);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Container onKeyUp={keyHandler} coloractive={coloractive}>
      <button
        className={`dropdown_activator ${isLocation && "active"}`}
        aria-haspopup="true"
        aria-controls={dropdownTitle}
        onClick={clickHandler}
        ref={activatorRef}
      >
        <span>{dropdownTitle}</span>
        <IoIosArrowDown
          style={isOpen && { transform: "rotate(180deg)" }}
          color={coloractive}
          size="16px"
        />
      </button>
      {isOpen && (
        <ul ref={dropdownListRef} className="dropdown_item_list">
          {items.map((item, index) => (
            <li className="item_list" key={index}>
              <NavLinkComponent
                label={item.anchor}
                path={item.path}
                onClick={() => closeDropDown()}
                level={2}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default DropdownItemMenu;
