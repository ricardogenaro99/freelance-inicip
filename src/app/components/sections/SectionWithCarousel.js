import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../carousel/CarouselItem";
import { SectionContainerStyle } from "./styles";

function SectionWithCarousel({ children, gap = "var(--gap-xl)", images = [] }) {
  return (
    <SectionContainerStyle gap={gap}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {images.map((e, i) => (
          <CarouselItem key={i} image={e.image} legend={e.legend} />
        ))}
      </Carousel>

      <div className="section-content">{children}</div>
    </SectionContainerStyle>
  );
}

export default SectionWithCarousel;
