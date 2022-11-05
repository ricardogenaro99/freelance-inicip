import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import CarouselItem from "../carousel/CarouselItem";
import { ContainerSectionStyle, ContainerImages, Title } from "./styles";

const ContainerCarousel = styled(ContainerImages)`
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
  staticContent,
  background,
}) {
  return (
    <ContainerSectionStyle
      isMainContent={isMainContent}
      gap={gap}
      sectionFullHeight={carouselFullHeight}
    >
      <ContainerCarousel
        background={background}
        carouselFullHeight={carouselFullHeight}
      >
        <Carousel
          dynamicHeight
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
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

        <div className="static-container">
          {title ? <Title>{title}</Title> : staticContent}
        </div>
      </ContainerCarousel>

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
