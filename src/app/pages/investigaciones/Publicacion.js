import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";

function Publicacion() {
  const params = useParams();
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <div>Publicacion</div>;
}

export default Publicacion;
