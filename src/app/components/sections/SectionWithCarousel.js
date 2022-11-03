import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import CarouselItem from "../carousel/CarouselItem";
import { ContainerSectionStyle, ImagesContainer, Title } from "./styles";

const CarouselContainer = styled(ImagesContainer)`
  height: ${(props) =>
    props.carouselFullHeight ? "100vh" : "var(--cover-image-height)"};
`;
function SectionWithCarousel({
  children,
  gap = "var(--gap-xl)",
  images = [],
  isMainContent = false,
  carouselFullHeight = false,
  title,
  background,
  asTitle,
}) {
  return (
    <ContainerSectionStyle
      isMainContent={isMainContent}
      gap={gap}
      sectionFullHeight={carouselFullHeight}
    >
      <CarouselContainer
        background={background}
        carouselFullHeight={carouselFullHeight}
      >
        <Carousel
          dynamicHeight
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {images.map((e, i) => (
            <CarouselItem
              key={i}
              image={e.image}
              legend={e.legend}
              carouselFullHeight={carouselFullHeight}
            />
          ))}
        </Carousel>
        <div className="title-container">
          <Title as={asTitle}>{title}</Title>
        </div>
      </CarouselContainer>

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

export default SectionWithCarousel;
