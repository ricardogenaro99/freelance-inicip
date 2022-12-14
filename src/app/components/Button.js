import styled from "styled-components";

export const ButtonRectangle = styled.button`
  padding: 0 10px;
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
  border: none;
  cursor: pointer;
  filter: brightness(1.1);
  &:hover {
    opacity: 1;
    filter: brightness(1);
  }
`;

export const Chip = styled.span`
  text-align: center;
  background: var(--color-yellow);
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
`;
