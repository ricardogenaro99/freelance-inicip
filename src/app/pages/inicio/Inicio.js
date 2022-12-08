import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import {
  carousel_1,
  carousel_2,
  carousel_3,
  carousel_4,
  carousel_5,
  carousel_6,
} from "../../../assets/carousel";
import portadaNoticia_1 from "../../../assets/tmp/noticia (1).png";
import portadaNoticia_2 from "../../../assets/tmp/noticia (2).png";
import portadaNoticia_3 from "../../../assets/tmp/noticia (3).png";
import {
  CardNoticia,
  SectionWithCarousel,
  SubSectionBasic,
} from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useScrollPosition } from "../../hooks";
import { device } from "../../utils/generalBreakpoints";
import { API_ENDPOINT } from "../../utils/generalConst";

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
  transform: translate(-45%, 20%);
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

const ContainerNoticias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(calc(100% / 4), 1fr)); */
  grid-auto-columns: 1fr;
  gap: var(--gap-xxl) var(--gap-l);

  @media ${device.tabletM} {
    grid-template-columns: 1fr;
  }
`;

const ContainerSchoolInformation = styled.div``;
function Inicio() {
  const { configTheme, resetTheme } = useThemeHeader();
  const scrollPosition = useScrollPosition();
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      title:
        "1ER ENCUENTRO DE DEPARTAMENTOS DE INVESTIGACIÓN DE LAS ESCUELAS DE POSGRADO DE LAS FF.AA. Y LA PNP",
      image: portadaNoticia_1,
      content:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>",
      urlPdf: "",
      createdAt: "19 abril - 2022",
    },
    {
      id: 2,
      title: "NOTICIA ESTATICA DE EJEMPLO",
      image: portadaNoticia_2,
      content:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>",
      urlPdf: "",
      createdAt: "19 abril - 2022",
    },
    {
      id: 3,
      title: "NOTICIA ESTATICA DE EJEMPLO",
      image: portadaNoticia_3,
      content:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>",
      urlPdf: "",
      createdAt: "19 abril - 2022",
    },
  ]);

  const initTheme = useCallback(() => {
    configTheme("transparent", null, null, false);
  }, [configTheme]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios(`${API_ENDPOINT}/posts`);
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setNoticias(data.slice(0, 3));
      } catch (error) {
        setNoticias([]);
      }
    };

    // // loadData();
  }, []);

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
    { image: carousel_5, legend: "" },
    { image: carousel_6, legend: "" },
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
      <ContainerSchoolInformation>
        <section></section>
        <section></section>
      </ContainerSchoolInformation>
      {noticias && noticias.length >= 3 && (
        <SubSectionBasic
          title="Últimas Noticias"
          titleStyle={{
            fontSize: "var(--font-size-xxl)",
            textAlign: "center",
          }}
        >
          <ContainerNoticias>
            {noticias.slice(0, 3).map((e, i) => (
              <CardNoticia key={i} {...e} />
            ))}
          </ContainerNoticias>
        </SubSectionBasic>
      )}
    </SectionWithCarousel>
  );
}

export default Inicio;
