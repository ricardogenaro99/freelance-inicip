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
  const renderContent = () => (
    <>
      {title && <Title>{title}</Title>}
      <div className="subsection-content">{children}</div>
    </>
  );

  return (
    <ContainerSubSectionStyle isMainContent={isMainContent} gap={gap}>
      {isMainContent ? (
        <div className="main-content">{renderContent()}</div>
      ) : (
        renderContent()
      )}
    </ContainerSubSectionStyle>
  );
}

export default SubSectionBasic;
