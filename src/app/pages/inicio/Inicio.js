import React, { useCallback, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import {
  carousel_1,
  carousel_2,
  carousel_3,
  carousel_4
} from "../../../assets/carousel";
import { SectionWithCarousel } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useScrollPosition } from "../../hooks";
import { device } from "../../utils/generalBreakpoints";

const StaticContentContainer = styled.div`
  background: var(--color-primary);
  max-width: 500px;
  padding: 45px 35px !important;
  display: grid;
  /* grid-template-columns: 0.5fr 1fr; */
  justify-content: center;
  align-items: center;
  gap: var(--gap-big);
  transform: translate(-45%, 5%);

  margin: 20px;

  * {
    text-align: left;
  }

  > .static-content-left {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      object-fit: cover;
      width: 100%;
      max-width: 380px;
    }
  }

  > .static-content-right {
    font-size: 2.2em;
    padding-right: 12%;
    line-height: 1.4em;
  }

  > .static-content-img {
    height: 100%;
    width: 100%;
    display: flex;
    img {
      object-fit: cover;
      width: 100%;
    }
  }

  > .static-content-text {
    * {
      font-family: "Times New Roman", Times, serif;
      line-height: 1;
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

      h4 {
        font-size: 1.6rem;
        font-weight: 600;
      }
    }

    h6 {
      font-size: 1.1rem;
      font-style: italic;
      font-weight: 500;
    }
  }

  @media ${device.laptopM} {
    grid-template-columns: auto;
    grid-auto-rows: auto;
    gap: var(--gap-xxl);
    > .static-content-left {
      > img {
        max-width: 320px;
      }
    }
    > .static-content-right {
      text-align: center;
      font-size: 2em;
      padding: 0 5%;
    }
    transform: translate(-0%, 5%);
  }

  @media ${device.tabletL} {
    padding: 25px !important;
  }

  @media ${device.mobileL} {
    grid-template-columns: auto;
    grid-auto-rows: auto;
    gap: var(--gap-xl);
    > .static-content-left {
      > img {
        max-width: 280px;
      }
    }
    > .static-content-right {
      text-align: center;
      font-size: 1.7em;
      padding: 0 5%;
    }
  }
`;

function Inicio() {
  const { configTheme, resetTheme } = useThemeHeader();
  const scrollPosition = useScrollPosition();

  // const initTheme = useCallback(() => {
  //   configTheme("transparent", null, null, false);
  // }, [configTheme]);

  const initTheme = useCallback(() => {
    resetTheme();
  }, [resetTheme]);

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

  const images = [
    { image: carousel_1, legend: "" },
    { image: carousel_2, legend: "" },
    { image: carousel_3, legend: "" },
    { image: carousel_4, legend: "" },
  ];

  const renderStaticContent = () => {
    return (
      <StaticContentContainer>
        {/* <div className="static-content-left">
          <img src={logoEscudo} alt="logo" />
        </div> */}

        {/* <h5 className="static-content-right">
          El INICIP, forma parte de la Escuela de Posgrado de la PNP
        </h5> */}

        {/* <div className="static-content-img">
          <img src={logoHome} alt="emblema" />
        </div> */}

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
