import React from "react";
import styled from "styled-components";
import { chapaq } from "../../../assets/revistas";
import { SectionBasic } from "../../components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: column;
  gap: var(--gap-xl);
  .section-info {
    display: grid;
    gap: var(--gap-m);

    .image-container {
      img {
        object-fit: cover;
        width: 100%;
      }
    }

    .meta-container {
      display: flex;
      flex-direction: column;
      gap: var(--gap-m);
    }
  }

  .section-text {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xl);

    .content-post {
      * {
        text-align: justify;
      }
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);

    .section-info {
      grid-template-columns: 250px 1fr;
    }
  }

  @media ${device.tabletS} {
    .section-info {
      grid-template-columns: 1fr;
    }
  }
`;

function RevistaCientifica() {
  return (
    <SectionBasic
      title="“CHAPAQ”, Revista Académica de la Escuela de Posgrado de la PNP"
      isMainContent
    >
      <Container>
        <section className="section-info">
          <div className="image-container">
            <img src={chapaq} alt="cover" />
          </div>
        </section>
        <section className="section-text">
          <div className="content-post">
            <p>
              <b>CHAPAQ,</b> es una publicación semestral de la Escuela de
              Posgrado de la Policía Nacional del Perú (ESCPOGRA - PNP), que fue
              creada en agosto de 2021 y es la primera revista científica
              especializada en Ciencias Policiales en el Perú, que tiene como
              objetivo la difusión de artículos de investigación y reseñas
              críticas relevantes para las Ciencias Policiales en el Perú,
              América Latina y otras partes del mundo. Está dirigida a personal
              de oficiales y suboficiales de armas y servicios de la Policía
              Nacional del Perú (en actividad y/o retiro), estudiantes,
              docentes, egresados e investigadores de Escuelas de Formación
              Profesional Policial y Militar, instituciones de educación
              superior públicas y privadas, institutos y centros de
              investigación a nivel nacional e internacional, así como a
              profesionales e investigadores de las entidades gubernamentales y
              la sociedad civil en general interesados en el estudio de las
              ciencias policiales. Nuestro portal web cumple con todos los
              estándares exigidos a nivel internacional para la gestión y
              administración de revistas científicas, ya que se encuentra en el{" "}
              <b>OJS (Open Journal System)</b>. <br />
              La Revista cuenta con el <b>ISSN: 2810-8639</b> (En línea) Para
              más información sobre nuestras convocatorias, normas de
              publicación y ejes temáticos, puede visitar nuestro portal web:{" "}
              <b>
                <a
                  href="http://www.revistachapaq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Revista Chapaq
                </a>
              </b>
            </p>
          </div>
        </section>
      </Container>
    </SectionBasic>
  );
}

export default RevistaCientifica;
