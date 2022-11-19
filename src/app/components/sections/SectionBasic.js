import React from "react";
import { ContainerSectionStyle, Title } from "./styles";

function SectionBasic({
  title,
  children,
  gap = "var(--gap-xl)",
  isMainContent = false,
  maxWidth,
}) {
  const renderContent = () => (
    <>
      {title && <Title isMainContent={true}>{title}</Title>}
      <div className="section-content">{children}</div>
    </>
  );

  return (
    <ContainerSectionStyle
      isMainContent={isMainContent}
      gap={gap}
      maxWidth={maxWidth}
    >
      {isMainContent ? (
        <div className="main-content">{renderContent()}</div>
      ) : (
        renderContent()
      )}
    </ContainerSectionStyle>
  );
}

export default SectionBasic;
