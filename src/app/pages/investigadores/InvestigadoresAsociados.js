import React, { useEffect } from "react";
import { SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { PROPS_SECTION } from "../../utils/generalConst";

function InvestigadoresAsociados() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic {...PROPS_SECTION}>
      <TwoSectionsMenu title="Investigadores Asociados"></TwoSectionsMenu>
    </SectionBasic>
  );
}

export default InvestigadoresAsociados;
