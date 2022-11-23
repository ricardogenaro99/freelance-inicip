import React, { useEffect } from "react";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

function Proyectos() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);
  return <div>Proyectos</div>;
}

export default Proyectos;
