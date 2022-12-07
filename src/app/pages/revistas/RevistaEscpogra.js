import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { escpogra } from "../../../assets/revistas";
import {
  CardList,
  Chip,
  SectionBasic,
  SubSectionBasic,
} from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { PROPS_SECTION } from "../../utils/generalConst";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: var(--gap-xl);

  .section-text {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xl);

    .content-post {
      display: grid;
      gap: var(--gap-l);

      .guidelines {
        list-style: initial;
        margin-left: 20px;
      }
    }
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--gap-m);
`;

function RevistaEscpogra() {
  const [data, setData] = useState([]);
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    setData([
      {
        title: "REVISTA ESCPOGRA",
        image: escpogra,
        content: (
          <ContainerText>
            <Chip>Edición N° 1 (octubre – 2022) </Chip>
          </ContainerText>
        ),
      },
    ]);
  }, []);

  return (
    <SectionBasic {...PROPS_SECTION}>
      <TwoSectionsMenu title="REVISTA ESCPOGRA">
        <Container>
          <section className="section-text">
            <div className="content-post">
              <p>
                <b>Revista ESCPOGRA,</b> es una publicación trimestral de la
                Escuela de Posgrado de la Policía Nacional del Perú (ESCPOGRA –
                PNP), que tiene como objetivo difundir las actividades
                institucionales, mejoras en la investigación científica,
                actividades de bienestar estudiantil, noticias y eventos
                académicos realizadas durante el año, entre los estudiantes,
                docentes, egresados y comunidad académica policial,
                contribuyendo a los avances de la acreditación de nuestros
                programas académicos.
              </p>
              <p>
                La Revista, mantiene una convocatoria abierta durante el año
                para que nuestros{" "}
                <b>
                  estudiantes y docentes, así como a nuestra comunidad de
                  egresados de la ESCPOGRA, puedan enviar sus artículos de
                  opinión y/o ensayos sobre problemáticas institucionales, con
                  el fin de promover el debate desde el campo académico.
                </b>
              </p>
              <div>
                <p>
                  Para remitir su artículo y/o ensayo, debe seguir las
                  siguientes pautas:
                </p>
                <ul className="guidelines">
                  <li>Número de palabras: 800 a 2,000 palabras (máximo)</li>
                  <li>Puede contener imágenes.</li>
                  <li>Debe tener referencias bibliográficas.</li>
                  <li>Adjuntar su CV resumido y fotografía del autor.</li>
                </ul>
              </div>
              <p style={{ textAlign: "left" }}>
                <b>Puede enviarlo al siguiente correo:</b>{" "}
                <a
                  style={{ color: "var(--color-link)" }}
                  href="mailto:revista.institucional@escpograpnp.com"
                >
                  revista.institucional@escpograpnp.com
                </a>
              </p>
            </div>
          </section>
          <SubSectionBasic title="Ediciones" className="section-list">
            <CardList
              data={data}
              scroll={false}
              maxHeightItem="500px"
              widthImage="200px"
              columns={1}
              heightImageText="auto auto"
            />
          </SubSectionBasic>
        </Container>
      </TwoSectionsMenu>
    </SectionBasic>
  );
}

export default RevistaEscpogra;
