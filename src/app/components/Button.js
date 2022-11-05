import styled from "styled-components";

export const ButtonRectangle = styled.button`
  padding: 6px 10px;
  gap: 10px;
  background: ${(props) => props.background || "var(--color-primary)"};
  color: ${(props) => props.color || "var(--color-white)"};
  height: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border-radius: var(--border-radius-global);
  opacity: 0.9;
  filter: brightness(1.1);
  &:hover {
    opacity: 1;
    filter: brightness(1);
  }
`;
