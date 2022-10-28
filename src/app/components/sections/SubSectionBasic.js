import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  .subsection-content {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
  }
`;

const Title = styled.h5`
  font-size: var(--font-size-xl);
  color: var(--color-primary);
`;

function SubSectionBasic({ title, children, gap = "var(--gap-s)" }) {
  return (
    <Container gap={gap}>
      {title && <Title>{title}</Title>}
      <div className="subsection-content">{children}</div>
    </Container>
  );
}

export default SubSectionBasic;
