import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  height: var(--cover-image-height);
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media ${device.tabletS} {
    height: auto;
  }
`;

function CarouselItem({ image, legend }) {
  return (
    <Container>
      <img src={image} alt="carousel" />
      {legend && <p className="legend">{legend}</p>}
    </Container>
  );
}

export default CarouselItem;
