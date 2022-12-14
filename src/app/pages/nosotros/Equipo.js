import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { coordinadorGeneral, directorEscpogra } from "../../../assets/equipo";
import {
  CardEquipoPrincipal,
  SectionBasic,
  TitleWithSeparator,
} from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { device } from "../../utils/generalBreakpoints";
import { PROPS_SECTION } from "../../utils/generalConst";

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
    title: `Mg. Alejandro Mejía Tarazona`,
    content: "Coordinador General - INICIP",
    image: coordinadorGeneral,
  },
];

function Equipo() {
  const [equipoPrincipal, setEquipoPrincipal] = useState(initEquipoPrincipal);
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic {...PROPS_SECTION}>
      <TwoSectionsMenu title="Equipo">
        <TitleWithSeparator title={"COMITÉ EJECUTIVO"} />
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
