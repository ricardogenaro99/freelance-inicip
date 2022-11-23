import React, { useEffect } from "react";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

function InvestigadoresAsociados() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);
  return <div>InvestigadoresAsociados</div>;
}

export default InvestigadoresAsociados;
