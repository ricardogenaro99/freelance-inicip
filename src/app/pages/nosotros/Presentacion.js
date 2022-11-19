import React, { useEffect } from "react";
import styled from "styled-components";
import { trianglifyLowres } from "../../../assets/extras";
import { portadaPresentacion } from "../../../assets/portadas";
import {
  SectionWhitImage,
  SeparatorBasic,
  SubSectionBasic,
} from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { device } from "../../utils/generalBreakpoints";

const ContainerMisionVision = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  opacity: 0.9;

  &::before {
    content: "";
    background: #00000096;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .container-mision-vision {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--gap-xl);
    padding: var(--padding-global);
    position: relative;
    z-index: 2;

    .content {
      color: var(--color-white);
    }

    @media ${device.tabletL} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auro 1fr;
    }
  }
`;

function Presentacion() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionWhitImage title="Presentacion" image={portadaPresentacion}>
      <TwoSectionsMenu>
        <SubSectionBasic title="Quiénes somos">
          El Instituto de Investigación en Ciencias Policiales (INICIP), creado
          el 04 de noviembre de 2021, es una unidad académica de la Escuela de
          Posgrado de la Policía Nacional del Perú (ESCPOGRA – PNP), dedicada al
          desarrollo y promoción de la investigación académica
          interdisciplinaria que tiene por finalidad contribuir al desarrollo y
          modernización del sistema educativo de posgrado de la Policía Nacional
          del Perú, en conformidad con los lineamientos del Decreto Legislativo
          N° 1318 y con el Reglamento Institucional de la ESCPOGRA – PNP. El
          instituto está conformado por estudiantes, docentes e investigadores
          con especial interés en el campo de las Ciencias Policiales y en las
          líneas de investigación establecidas por la ESCPOGRA – PNP, bajo los
          lineamientos del Plan Estratégico de Capacidades de la PNP al 2030
          “Mariano Santos Mateos” (MS30). Nuestra producción está orientada a la
          publicación de diversos trabajos de investigaciones (Documentos de
          Trabajo, Series de Investigación, Libros digitales, entre otros).
        </SubSectionBasic>

        <ContainerMisionVision image={trianglifyLowres}>
          <div className="container-mision-vision">
            <SubSectionBasic title="Misión" colorTitle="var(--color-orange)">
              <p className="content">
                Ser el centro de producción científica de más alto nivel en la
                Policía Nacional del Perú, dedicada a la investigación,
                producción y promoción de estudios en el campo de las ciencias
                policiales desde una perspectiva multidisciplinaria, a fin de
                contribuir a la comprensión de las problemáticas actuales a
                nivel institucional y la sociedad peruana.
              </p>
            </SubSectionBasic>
            <SeparatorBasic color="var(--color-orange)" />
            <SubSectionBasic title="Visión" colorTitle="var(--color-orange)">
              <p className="content">
                Estimular la vocación por la investigación científica entre
                estudiantes, docentes e investigadores de la ESCPOGRA PNP, y
                personal de oficiales y suboficiales de la PNP, por el
                desarrollo de investigaciones de calidad y con incidencia en la
                sociedad actual, logrando el posicionamiento académico de la
                ESCPOGRA PNP a nivel nacional e internacional.
              </p>
            </SubSectionBasic>
          </div>
        </ContainerMisionVision>
      </TwoSectionsMenu>
    </SectionWhitImage>
  );
}

export default Presentacion;
