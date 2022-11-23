import React, { useEffect } from "react";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

function AsistentesInvestigacion() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);
  return <div>AsistentesInvestigacion</div>;
}

export default AsistentesInvestigacion;
