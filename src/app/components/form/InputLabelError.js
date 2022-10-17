import React, { useId } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  .error {
    color: var(--color-ocupado-text);
  }
`;

const ContainerInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  border: var(--border-gray);
  padding: 8px 16px;
  gap: var(--gap-s);
  background-color: var(--color-white-pure);
  span {
    color: var(--color-gray);
    font-size: var(--font-size-s);
  }
`;

function InputLabelError({ label, name, type = "text", error }) {
  const id = useId();

  return (
    <Container>
      <ContainerInputLabel htmlFor={id}>
        <span>{label}</span>
        <input id={id} name={name} type={type} />
      </ContainerInputLabel>
      {error && <span className='error'>{error}</span>}
    </Container>
  );
}

export default InputLabelError;
