import React, { useCallback, useEffect } from "react";
import CountUp from "react-countup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import {
  carousel_1,
  carousel_2,
  carousel_3,
  carousel_4,
} from "../../assets/carousel";
import { SectionBasic, SectionWithCarousel } from "../components";
import { useThemeHeader } from "../contexts/ThemeHeaderProvider";
import { useScrollPosition } from "../hooks";

const countingBoxSize = "150px";

const TitleCarouselContainer = styled.div``;

const CountingBoxContainer = styled.div`
  display: flex;
  gap: var(--gap-m) var(--gap-l);
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;
`;

const CountingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${countingBoxSize};
  height: ${countingBoxSize};
  background: ${(props) => props.background};
  font-size: var(--font-size-l);
  color: ${(props) => props.color};
  border-radius: var(--border-radius-global);

  .counter {
    font-size: 2.5em;
    font-weight: 700;
  }

  .label {
    font-size: 1em;
    font-weight: 700;
  }
`;

function CountingBoxComponent({
  end = 0,
  label = "",
  background,
  color = "inherit",
}) {
  return (
    <CountingBox background={background} color={color}>
      <CountUp className="counter" end={end} duration="1" />
      {label && <span className="label">{label}</span>}
    </CountingBox>
  );
}

const images = [
  { image: carousel_1, legend: "" },
  { image: carousel_2, legend: "" },
  { image: carousel_3, legend: "" },
  { image: carousel_4, legend: "" },
];

function Inicio() {
  const { configTheme, resetTheme } = useThemeHeader();
  const scrollPosition = useScrollPosition();

  const initTheme = useCallback(() => {
    configTheme("transparent", null, null, false);
  }, [configTheme]);

  useEffect(() => {
    initTheme();
  }, [configTheme, initTheme]);

  useEffect(() => {
    if (scrollPosition > 280) {
      resetTheme();
    } else {
      initTheme();
    }
  }, [initTheme, resetTheme, scrollPosition]);

  const renderTitlecontent = () => {
    return (
      <TitleCarouselContainer>
        <div>Lorem, ipsum dolor.</div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          similique!
        </div>
      </TitleCarouselContainer>
    );
  };

  return (
    <SectionWithCarousel
      images={images}
      carouselFullHeight
      background="linear-gradient(to top, rgba(0, 0, 0, 0.3), var(--color-dark))"
      isMainContent
      asTitle="div"
      // title={renderTitlecontent()}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum doloremque
        iste dolores corporis error natus blanditiis molestiae sapiente alias at
        accusamus cupiditate nemo perspiciatis quasi est repellendus accusantium
        modi praesentium, minus non ut officia obcaecati sint perferendis. Odit
        quia blanditiis enim deleniti praesentium repellendus dolor delectus
        fugit quibusdam molestias doloremque voluptates error, natus accusamus,
        voluptatum nostrum quasi. Impedit provident quos nihil perspiciatis
        itaque illum. Quibusdam enim ullam itaque nisi officia voluptate fugiat
        recusandae sunt reprehenderit assumenda! Obcaecati nesciunt rem
        cupiditate. Inventore, similique iure optio quas numquam, facere id at
        laborum delectus in dolorum nisi molestiae enim quisquam suscipit.
        Repellat, itaque? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Eum doloremque iste dolores corporis error natus blanditiis
        molestiae sapiente alias at accusamus cupiditate nemo perspiciatis quasi
        est repellendus accusantium modi praesentium, minus non ut officia
        obcaecati sint perferendis. Odit quia blanditiis enim deleniti
        praesentium repellendus dolor delectus fugit quibusdam molestias
        doloremque voluptates error, natus accusamus, voluptatum nostrum quasi.
        Impedit provident quos nihil perspiciatis itaque illum. Quibusdam enim
        ullam itaque nisi officia voluptate fugiat recusandae sunt reprehenderit
        assumenda! Obcaecati nesciunt rem cupiditate. Inventore, similique iure
        optio quas numquam, facere id at laborum delectus in dolorum nisi
        molestiae enim quisquam suscipit. Repellat, itaque? Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Eum doloremque iste dolores
        corporis error natus blanditiis molestiae sapiente alias at accusamus
        cupiditate nemo perspiciatis quasi est repellendus accusantium modi
        praesentium, minus non ut officia obcaecati sint perferendis. Odit quia
        blanditiis enim deleniti praesentium repellendus dolor delectus fugit
        quibusdam molestias doloremque voluptates error, natus accusamus,
        voluptatum nostrum quasi. Impedit provident quos nihil perspiciatis
        itaque illum. Quibusdam enim ullam itaque nisi officia voluptate fugiat
        recusandae sunt reprehenderit assumenda! Obcaecati nesciunt rem
        cupiditate. Inventore, similique iure optio quas numquam, facere id at
        laborum delectus in dolorum nisi molestiae enim quisquam suscipit.
        Repellat, itaque? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Eum doloremque iste dolores corporis error natus blanditiis
        molestiae sapiente alias at accusamus cupiditate nemo perspiciatis quasi
        est repellendus accusantium modi praesentium, minus non ut officia
        obcaecati sint perferendis. Odit quia blanditiis enim deleniti
        praesentium repellendus dolor delectus fugit quibusdam molestias
        doloremque voluptates error, natus accusamus, voluptatum nostrum quasi.
        Impedit provident quos nihil perspiciatis itaque illum. Quibusdam enim
        ullam itaque nisi officia voluptate fugiat recusandae sunt reprehenderit
        assumenda! Obcaecati nesciunt rem cupiditate. Inventore, similique iure
        optio quas numquam, facere id at laborum delectus in dolorum nisi
        molestiae enim quisquam suscipit. Repellat, itaque? Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Eum doloremque iste dolores
        corporis error natus blanditiis molestiae sapiente alias at accusamus
        cupiditate nemo perspiciatis quasi est repellendus accusantium modi
        praesentium, minus non ut officia obcaecati sint perferendis. Odit quia
        blanditiis enim deleniti praesentium repellendus dolor delectus fugit
        quibusdam molestias doloremque voluptates error, natus accusamus,
        voluptatum nostrum quasi. Impedit provident quos nihil perspiciatis
        itaque illum. Quibusdam enim ullam itaque nisi officia voluptate fugiat
        recusandae sunt reprehenderit assumenda! Obcaecati nesciunt rem
        cupiditate. Inventore, similique iure optio quas numquam, facere id at
        laborum delectus in dolorum nisi molestiae enim quisquam suscipit.
        Repellat, itaque?
      </p>
      <CountingBoxContainer>
        <CountingBoxComponent
          background="var(--color-sub-primary)"
          color="var(--color-white)"
          end={10}
          label="Publicaciones"
        />
        <CountingBoxComponent
          background="var(--color-orange)"
          end={8}
          label="Investigaciones"
        />
        <CountingBoxComponent
          background="var(--color-red)"
          end={34}
          label="Lectores"
        />
      </CountingBoxContainer>
      <SectionBasic title="Últimas Publicaciones"></SectionBasic>
    </SectionWithCarousel>
  );
}

export default Inicio;
