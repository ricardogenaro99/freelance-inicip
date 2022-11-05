import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { ContainerSectionStyle, ContainerImages, Title } from "./styles";

const ContainerImage = styled(ContainerImages)`
  height: var(--cover-image-height);

  @media ${device.mobileL} {
    height: auto;
  }
`;

function SectionBasic({
  title,
  image,
  children,
  gap = "var(--gap-xl)",
  isMainContent = false,
}) {
  const renderSectionHeader = () => {
    if (!title) {
      return;
    }

    if (!image) {
      return <Title>{title}</Title>;
    }

    return (
      <ContainerImage>
        <img src={image} alt="front" />
        <div className="static-container">
          <Title>{title}</Title>
        </div>
      </ContainerImage>
    );
  };

  return (
    <ContainerSectionStyle isMainContent={isMainContent} gap={gap}>
      {renderSectionHeader()}
      {isMainContent ? (
        <div className="main-content">
          <div className="section-content">{children}</div>
        </div>
      ) : (
        <div className="section-content">{children}</div>
      )}
    </ContainerSectionStyle>
  );
}

export default SectionBasic;
