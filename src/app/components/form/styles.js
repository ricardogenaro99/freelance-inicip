import styled from "styled-components";

export const ContainerInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  outline: var(--border-gray);
  padding: 9px 15px;
  background: var(--color-white);
  border-radius: var(--border-radius-global);
  gap: var(--gap-s);

  font-size: var(--font-size-m);

  .label-form {
    color: var(--color-sub-primary);
    font-size: 0.95em;
    font-weight: 600;
  }

  .input-form {
    border: none;
    outline: none;
    line-height: 20px;
    resize: vertical;
    font-size: 1em;
    &:disabled {
      background: transparent;
    }

    &::placeholder {
      font-size: 0.98em;
    }
  }
`;
