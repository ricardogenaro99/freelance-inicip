import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  Contacto,
  Equipo,
  Inicio,
  NotFound,
  Presentacion,
  Publicaciones,
} from "../pages";
import { PATHS } from "../routes";

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: var(--padding-global);

  > .main-content {
    max-width: 1920px;
    width: 100%;
  }
`;
function Main() {
  return (
    <Container>
      <div className="main-content">
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
              <Route
                path={PATHS.investigaciones.children.publicaciones.path}
                element={<Publicaciones />}
              />
            </Route>
            <Route path={PATHS.contacto.path} element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Container>
  );
}

export default Main;
