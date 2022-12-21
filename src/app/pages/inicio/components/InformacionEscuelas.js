import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import portadaNoticia_1 from "../../../../assets/tmp/noticia (1).png";
import portadaNoticia_2 from "../../../../assets/tmp/noticia (2).png";
import { ButtonRectangle, CarouselItem } from "../../../components";
import { device } from "../../../utils/generalBreakpoints";

const ContainerSchoolInformation = styled.div`
  display: grid;
  > section {
    padding: 30px 0;
    display: grid;
    gap: var(--gap-s) var(--gap-xl);

    &:nth-child(1) {
      grid-template-columns: 1.7fr 2fr;
    }

    &:nth-child(2) {
      grid-template-columns: 2fr 1.7fr;
    }

    .image-container {
      border-radius: 20px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    @media ${device.tabletM} {
      grid-template-columns: 1fr !important;

      &:nth-child(2) {
        .image-container {
          grid-row: 1 / 2;
        }
      }
    }
  }
`;

const SectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-m);
  padding: 10px;
  > h4 {
    color: var(--color-primary);
    text-align: center;
    font-size: var(--font-size-xxl);
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
  }
`;

const SectionInfo = ({ title, children }) => {
  return (
    <SectionInfoContainer>
      <h4>{title}</h4>
      <div>{children}</div>
    </SectionInfoContainer>
  );
};

function InformacionEscuelas() {
  const [images, setImages] = useState([
    { image: portadaNoticia_1, legend: "" },
    { image: portadaNoticia_2, legend: "" },
  ]);

  return (
    <ContainerSchoolInformation>
      <section>
        <div className="image-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=tzaM4VmjbZY"
            playing
            loop
            height="100%"
            width="100%"
          />
        </div>
        <SectionInfo title="Conócenos">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            voluptate quis dolor aliquam modi dolorum. Odio odit architecto
            rerum, animi alias quasi impedit voluptatibus officiis dignissimos
            magni similique blanditiis velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere esse odit omnis cupiditate, reiciendis similique, natus sit
            ipsam laboriosam dolorem eaque. Sit hic, incidunt ex ea facilis
            voluptates explicabo?
          </p>
          <ButtonRectangle style={{ margin: "0 auto", padding: "20px 30px" }}>
            Conoce más
          </ButtonRectangle>
        </SectionInfo>
      </section>
      <section>
        <SectionInfo title="Escuela Nacional">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            voluptate quis dolor aliquam modi dolorum. Odio odit architecto
            rerum, animi alias quasi impedit voluptatibus officiis dignissimos
            magni similique blanditiis velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere esse odit omnis cupiditate, reiciendis similique, natus sit
            ipsam laboriosam dolorem eaque. Sit hic, incidunt ex ea facilis
            voluptates explicabo?
          </p>
          <ButtonRectangle style={{ margin: "0 auto", padding: "20px 30px" }}>
            Conoce más
          </ButtonRectangle>
        </SectionInfo>
        <div className="image-container">
          <Carousel
            dynamicHeight
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
          >
            {images.map((e, i) => (
              <CarouselItem key={i} image={e.image} legend={e.legend} />
            ))}
          </Carousel>
        </div>
      </section>
    </ContainerSchoolInformation>
  );
}

export default InformacionEscuelas;
