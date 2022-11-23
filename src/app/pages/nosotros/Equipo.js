import React, { useEffect, useState } from "react";
import { coordinadorGeneral, directorEscpogra } from "../../../assets/equipo";
import { portadaEquipo } from "../../../assets/portadas";
import { CardEquipoPrincipal, SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { PROPS_SECTION } from "../../utils/generalConst";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;

  @media ${device.tabletS} {
    grid-auto-rows: auto;
  }
`;

const initEquipoPrincipal = [
  {
    id: 1,
    title: `Coronel PNP Nilton Santos Villalta`,
    content: "Director – ESCPOGRA PNP",
    image: directorEscpogra,
  },
  {
    id: 2,
    title: `Alejandro Mejía Tarazona`,
    content:
      "Profesor Auxiliar de la Facultad de Derecho y Ciencia Política de la Universidad Nacional Mayor de San Marcos (UNMSM). Licenciado en Ciencia Política y Gobierno por la Pontificia Universidad Católica del Perú (PUCP). Magíster en Políticas Públicas por la Facultad Latinoamericana de Ciencias Sociales (FLACSO – Ecuador). Especialista en políticas públicas, prevención y gestión de conflictos sociales, y metodología de la investigación científica. Ha trabajado como Especialista en la Dirección de Prevención y Gestión de Conflictos Sociales (MININTER). Cuenta con artículos científicos en temas de políticas públicas y conflictos socioambientales.",
    image: coordinadorGeneral,
  },
];

function Equipo() {
  const [equipoPrincipal, setEquipoPrincipal] = useState(initEquipoPrincipal);
  const [equipo, setEquipo] = useState([]);
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic title="Equipo" image={portadaEquipo} {...PROPS_SECTION}>
      <TwoSectionsMenu>
        <GridContainer>
          {equipoPrincipal.map((e, i) => (
            <CardEquipoPrincipal key={i} {...e}>
              {e.content}
            </CardEquipoPrincipal>
          ))}
        </GridContainer>

        {/* <CardList data={equipo} initDataPerPage={15} /> */}
      </TwoSectionsMenu>
    </SectionBasic>
  );
}

export default Equipo;
