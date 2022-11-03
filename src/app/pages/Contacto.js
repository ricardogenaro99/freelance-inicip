import React from "react";
import { useEffect } from "react";
import { useThemeHeader } from "../contexts/ThemeHeaderProvider";

function Contacto() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return <div>Contacto</div>;
}

export default Contacto;
