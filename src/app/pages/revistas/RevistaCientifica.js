import React, { useEffect } from "react";
import styled from "styled-components";
import { chapaq } from "../../../assets/revistas";
import { SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { device } from "../../utils/generalBreakpoints";
import { PROPS_SECTION } from "../../utils/generalConst";

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
      display: grid;
      gap: var(--gap-l);
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
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic {...PROPS_SECTION}>
      <TwoSectionsMenu
        title={
          <>
            <em>“CHAPAQ”,</em> Revista Académica de la Escuela de Posgrado de la
            PNP
          </>
        }
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
                <b>ISSN: 2810-8639</b> <em>(En línea)</em>
              </p>
              <p>
                <em>
                  <b>CHAPAQ,</b>
                </em>{" "}
                es una publicación semestral de la Escuela de Posgrado de la
                Policía Nacional del Perú (ESCPOGRA - PNP), que fue creada en
                agosto de 2021 y es la primera revista científica especializada
                en Ciencias Policiales en el Perú, que tiene como objetivo la
                difusión de artículos de investigación y reseñas críticas
                relevantes para las Ciencias Policiales en el Perú, América
                Latina y otras partes del mundo.
              </p>
              <p>
                Está dirigida a personal de oficiales y suboficiales de armas y
                servicios de la Policía Nacional del Perú (en actividad y/o
                retiro), estudiantes, docentes, egresados e investigadores de
                Escuelas de Formación Profesional Policial y Militar,
                instituciones de educación superior públicas y privadas,
                institutos y centros de investigación a nivel nacional e
                internacional, así como a profesionales e investigadores de las
                entidades gubernamentales y la sociedad civil en general
                interesados en el estudio de las ciencias policiales.
              </p>
              <p>
                Nuestro portal web cumple con todos los estándares exigidos a
                nivel internacional para la gestión y administración de revistas
                científicas, ya que se encuentra en el{" "}
                <em>
                  <b>OJS (Open Journal System)</b>
                </em>
              </p>
              <p>
                Para más información sobre nuestras convocatorias, normas de
                publicación y ejes temáticos, puede visitar nuestro portal web:{" "}
                <a
                  style={{ color: "var(--color-link)" }}
                  href="http://www.revistachapaq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.revistachapaq.com
                </a>
              </p>
              <p>
                <b>Correo:</b>{" "}
                <a
                  style={{ color: "var(--color-link)" }}
                  href="mailto:revista.chapaq@escpograpnp.com"
                >
                  revista.chapaq@escpograpnp.com
                </a>
              </p>
            </div>
          </section>
        </Container>
      </TwoSectionsMenu>
    </SectionBasic>
  );
}

export default RevistaCientifica;
