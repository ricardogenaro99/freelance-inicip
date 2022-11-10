import styled from "styled-components";

export const ContainerInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  outline: var(--border-gray);
  padding: 9px 15px;
  background: var(--color-white);
  border-radius: var(--border-radius-global);

  .label-form {
    color: var(--color-sub-primary);
    font-size: var(--font-size-s);
    font-weight: 600;
  }

  .input-form {
    border: none;
    outline: none;
    line-height: 20px;
    font-size: var(--font-size-m);

    &:disabled {
      background: transparent;
    }
  }
`;
