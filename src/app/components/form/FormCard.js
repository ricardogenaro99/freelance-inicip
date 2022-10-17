import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);
  background: var(--color-white-pure);
  border: var(--border-white);
  padding: 32px;
  width: 100%;
  max-width: 650px;

  .title-card {
    font-weight: 800;
    font-size: var(--font-size-xl);
    color: var(--color-black);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xl);
  }
`;
function FormCard({ title, children }) {
  return (
    <Container>
      <h3 className='title-card'>{title}</h3>
      <div className='content'>{children}</div>
    </Container>
  );
}

export default FormCard;
