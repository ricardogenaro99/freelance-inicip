import React from "react";
import styled from "styled-components";
import { ContainerSubSectionStyle } from "./styles";

const Title = styled.h5`
  font-size: var(--font-size-xl);
  color: ${(props) => props.color};
  font-family: "Roboto";
`;

function SubSectionBasic({
  title,
  children,
  gap = "var(--gap-s)",
  isMainContent = false,
  colorTitle = "var(--color-primary)",
  maxWidth,
  titleStyle,
}) {
  const renderContent = () => (
    <>
      {title && (
        <Title as="h5" color={colorTitle} style={titleStyle}>
          {title}
        </Title>
      )}
      <div className="subsection-content">{children}</div>
    </>
  );

  return (
    <ContainerSubSectionStyle
      isMainContent={isMainContent}
      gap={gap}
      maxWidth={maxWidth}
    >
      {isMainContent ? (
        <div className="main-content">{renderContent()}</div>
      ) : (
        renderContent()
      )}
    </ContainerSubSectionStyle>
  );
}

export default SubSectionBasic;
