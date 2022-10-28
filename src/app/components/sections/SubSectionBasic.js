import React from "react";
import styled from "styled-components";
import { SubSectionContainerStyle } from "./styles";

const Title = styled.h5`
  font-size: var(--font-size-xl);
  color: var(--color-primary);
`;

function SubSectionBasic({ title, children, gap = "var(--gap-s)" }) {
  return (
    <SubSectionContainerStyle gap={gap}>
      {title && <Title>{title}</Title>}
      <div className="subsection-content">{children}</div>
    </SubSectionContainerStyle>
  );
}

export default SubSectionBasic;
