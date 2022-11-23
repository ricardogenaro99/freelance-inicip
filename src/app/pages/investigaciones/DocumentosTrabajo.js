import React, { useEffect } from "react";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

function DocumentosTrabajo() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);
  return <div>DocumentosTrabajo</div>;
}

export default DocumentosTrabajo;
