import React, { useEffect } from "react";
import { SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { PROPS_SECTION } from "../../utils/generalConst";

function CooperacionInstitucional() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic title="Cooperación Institucional" {...PROPS_SECTION}>
      <TwoSectionsMenu>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet
        quibusdam non veritatis reiciendis! Numquam, cum reiciendis!
        Reprehenderit alias, praesentium assumenda vitae cumque quas, adipisci
        eum eligendi officia eveniet et?
      </TwoSectionsMenu>
    </SectionBasic>
  );
}

export default CooperacionInstitucional;
