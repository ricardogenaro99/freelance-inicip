import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { ContainerImages, ContainerSectionStyle, Title } from "./styles";

const ContainerImage = styled(ContainerImages)`
  height: var(--cover-image-height);

  @media ${device.mobileL} {
    height: auto;
  }
`;

function SectionWhitImage({
  title,
  image,
  children,
  gap = "var(--gap-xl)",
  isMainContent = true,
}) {
  return (
    <ContainerSectionStyle isMainContent={isMainContent} gap={gap}>
      <ContainerImage>
        <img src={image} alt="front" />
        <div className="static-container">
          <Title>{title}</Title>
        </div>
      </ContainerImage>
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

export default SectionWhitImage;
