import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { SectionContainerStyle } from "./styles";

const Title = styled.h4`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: var(--cover-image-height);
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title-container {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.3),
      var(--color-primary)
    );
    width: 100%;
    height: 100%;
    > * {
      color: var(--color-white);
    }
    > * {
      padding: 0 3%;
    }
  }

  @media ${device.tabletS} {
    height: auto;

    .title-container {
      height: calc(100% - 4px);
    }
  }
`;

function SectionBasic({ title, image, children, gap = "var(--gap-xl)" }) {
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
        <div className="title-container">
          <Title>{title}</Title>
        </div>
      </ImageContainer>
    );
  };

  return (
    <SectionContainerStyle gap={gap}>
      {renderSectionHeader()}
      <div className="section-content">{children}</div>
    </SectionContainerStyle>
  );
}

export default SectionBasic;
