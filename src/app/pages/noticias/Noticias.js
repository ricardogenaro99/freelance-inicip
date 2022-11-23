import React, { useEffect } from "react";
import { SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { PROPS_SECTION } from "../../utils/generalConst";

function Noticias() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);
  return <SectionBasic title="Noticias" {...PROPS_SECTION}></SectionBasic>;
}

export default Noticias;
