import React from "react";
import styled from "styled-components";
import { ContainerSubSectionStyle } from "./styles";

const Title = styled.h5`
  font-size: var(--font-size-xl);
  color: var(--color-primary);
`;

function SubSectionBasic({ title, children, gap = "var(--gap-s)" }) {
  return (
    <ContainerSubSectionStyle gap={gap}>
      {title && <Title>{title}</Title>}
      <div className="subsection-content">{children}</div>
    </ContainerSubSectionStyle>
  );
}

export default SubSectionBasic;
