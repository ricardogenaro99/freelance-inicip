import styled from "styled-components";

export const ButtonRectangle = styled.button`
  padding: 6px 10px;
  gap: 10px;
  border: 1px solid var(--color-primary);
  background: ${(props) => props.background || "var(--color-primary)"};
  color: ${(props) => props.color || "var(--color-white)"};
  height: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border-radius: var(--border-radius-global);

  &:hover {
    background-color: var(--color-secondary);
  }
`;
