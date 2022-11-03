import React from "react";
import styled from "styled-components";
import { ContainerSubSectionStyle } from "./styles";

const Title = styled.h5`
  font-size: var(--font-size-xl);
  color: var(--color-primary);
`;

function SubSectionBasic({
  title,
  children,
  gap = "var(--gap-s)",
  isMainContent = false,
}) {
  return (
    <ContainerSubSectionStyle isMainContent={isMainContent} gap={gap}>
      {title && <Title>{title}</Title>}
      {isMainContent ? (
        <div className="main-content">
          <div className="subsection-content">{children}</div>
        </div>
      ) : (
        <div className="subsection-content">{children}</div>
      )}
    </ContainerSubSectionStyle>
  );
}

export default SubSectionBasic;
