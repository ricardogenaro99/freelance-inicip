import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Contacto,
  Equipo,
  Inicio,
  NotFound,
  Presentacion,
  Publicacion,
  Publicaciones,
} from "../pages";
import { PATHS } from "../routes";
import { windowScroll } from "../utils/generalFunctions";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Main() {
  const location = useLocation();

  useEffect(() => {
    windowScroll();
  }, [location.pathname]);

  return (
    <Container>
      <Routes>
        <Route path="/">
          <Route index element={<Inicio />} />
          <Route path={PATHS.nosotros.path}>
            <Route
              path={PATHS.nosotros.children.presentacion.path}
              element={<Presentacion />}
            />
            <Route
              path={PATHS.nosotros.children.equipo.path}
              element={<Equipo />}
            />
          </Route>
          <Route path={PATHS.investigaciones.path}>
            <Route path={PATHS.investigaciones.children.publicaciones.path}>
              <Route index element={<Publicaciones />} />
              <Route path=":id" element={<Publicacion />} />
            </Route>
          </Route>
          <Route path={PATHS.contacto.path} element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default Main;
