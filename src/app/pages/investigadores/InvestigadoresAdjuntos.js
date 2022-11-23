import React, { useEffect } from "react";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

function InvestigadoresAdjuntos() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);
  return <div>InvestigadoresAdjuntos</div>;
}

export default InvestigadoresAdjuntos;
