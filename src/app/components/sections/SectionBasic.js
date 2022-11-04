import React from "react";
import styled from "styled-components";
import { ContainerSectionStyle, ImagesContainer, Title } from "./styles";

const ImageContainer = styled(ImagesContainer)`
  height: var(--cover-image-height);
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
      <ImageContainer>
        <img src={image} alt="front" />
        <div className="static-container">
          <Title>{title}</Title>
        </div>
      </ImageContainer>
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
