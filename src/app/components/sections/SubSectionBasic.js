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

function SubSectionBasic({ title, children, gap = "var(--gap-s)" }) {
  return (
    <Container gap={gap}>
      <h5>{title}</h5>
      <div className="subsection-content">{children}</div>
    </Container>
  );
}

export default SubSectionBasic;
