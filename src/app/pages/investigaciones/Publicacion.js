import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Publicacion() {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <div>Publicacion</div>;
}

export default Publicacion;
