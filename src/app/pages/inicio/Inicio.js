import React, { useCallback, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import {
  carousel_1,
  carousel_2,
  carousel_3,
  carousel_4,
} from "../../../assets/carousel";
import { SectionWithCarousel } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useScrollPosition } from "../../hooks";
import { device } from "../../utils/generalBreakpoints";

const lineBorder = "6px groove var(--color-orange)";
const floatPosition = "-15px";

const StaticContentContainer = styled.div`
  background: var(--color-sub-secondary);
  max-width: 500px;
  padding: 45px 35px !important;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: var(--gap-big);
  transform: translate(-45%, 5%);
  margin: 20px;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: transparent;
    opacity: 0.96;
  }

  &::after {
    border-top: ${lineBorder};
    border-left: ${lineBorder};
    top: ${floatPosition};
    left: ${floatPosition};
  }

  &::before {
    border-bottom: ${lineBorder};
    border-right: ${lineBorder};
    bottom: ${floatPosition};
    right: ${floatPosition};
  }

  * {
    text-align: left;
  }

  > .static-content-text {
    * {
      font-family: "Times New Roman", Times, serif;
      line-height: 1;
      color: var(--color-orange);
    }

    display: grid;
    gap: var(--gap-xl);

    div {
      display: grid;
      gap: var(--gap-m);
      h2 {
        font-size: 5rem;
        font-weight: 800;
      }

      hr {
        border-color: var(--color-orange);
      }

      h4 {
        font-size: 1.7rem;
        font-weight: 600;
      }
    }

    h6 {
      font-size: 1.4rem;
      font-style: italic;
      font-weight: 500;
    }
  }

  @media ${device.laptopM} {
    gap: var(--gap-xxl);
    transform: translate(-0%, 5%);
  }

  @media ${device.tabletL} {
    padding: 30px !important;
  }

  @media ${device.mobileL} {
    gap: var(--gap-xl);
  }
`;

function Inicio() {
  const { configTheme, resetTheme } = useThemeHeader();
  const scrollPosition = useScrollPosition();

  const initTheme = useCallback(() => {
    configTheme("transparent", null, null, false);
  }, [configTheme]);

  // const initTheme = useCallback(() => {
  //   resetTheme();
  // }, [resetTheme]);

  useEffect(() => {
    initTheme();
  }, [configTheme, initTheme]);

  useEffect(() => {
    if (scrollPosition > 50) {
      resetTheme();
    } else {
      initTheme();
    }
  }, [initTheme, resetTheme, scrollPosition]);

  const images = [
    { image: carousel_1, legend: "" },
    { image: carousel_2, legend: "" },
    { image: carousel_3, legend: "" },
    { image: carousel_4, legend: "" },
  ];

  const renderStaticContent = () => {
    return (
      <StaticContentContainer>
        <div className="static-content-text">
          <div>
            <h2>INICIP</h2>
            <hr />
            <h4>INSTITUTO DE INVESTIGACIÓN EN CIENCIAS POLICIALES</h4>
          </div>
          <h6>“Innovación e investigación, al servicio de la sociedad”</h6>
        </div>
      </StaticContentContainer>
    );
  };

  return (
    <SectionWithCarousel
      images={images}
      carouselFullHeight
      background="linear-gradient(to top, rgba(0, 0, 0, 0.5), var(--color-dark))"
      isMainContent
      staticContent={renderStaticContent()}
      translateY
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
        Repellat, itaque?
      </p>
      {/* <SectionBasic title="Últimas Publicaciones"></SectionBasic> */}
    </SectionWithCarousel>
  );
}

export default Inicio;
