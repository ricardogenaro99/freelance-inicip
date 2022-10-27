import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxl);

  .section-content {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
    padding: 0 .7%;
  }
`;

const Title = styled.h4`
  font-size: var(--font-size-xxl);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    object-fit: cover;
  }

  .title-container {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 100;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.3),
      var(--color-primary)
    );
    height: 100%;
    padding: 0 3%;
    color: var(--color-white);
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
    <Container gap={gap}>
      {renderSectionHeader()}
      <div className="section-content">{children}</div>
    </Container>
  );
}

export default SectionBasic;
