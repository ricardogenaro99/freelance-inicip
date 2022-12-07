import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  AsistentesInvestigacion,
  Contacto,
  CooperacionInstitucional,
  DocumentosTrabajo,
  Equipo,
  Inicio,
  InvestigadoresAdjuntos,
  InvestigadoresAsociados,
  MemoriasAnuales,
  NotFound,
  Noticia,
  Noticias,
  Presentacion,
  Proyectos,
  Publicacion,
  RevistaCientifica,
  RevistaEscpogra,
  SeriesTrabajo
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
          {/* Inicio */}
          <Route index element={<Inicio />} />
          {/* Nosotros */}
          <Route path={PATHS.nosotros.path}>
            <Route
              path={PATHS.nosotros.children.presentacion.path}
              element={<Presentacion />}
            />
            <Route
              path={PATHS.nosotros.children.equipo.path}
              element={<Equipo />}
            />
            <Route
              path={PATHS.nosotros.children.cooperacionInstitucional.path}
              element={<CooperacionInstitucional />}
            />
            <Route
              path={PATHS.nosotros.children.memoriasAnuales.path}
              element={<MemoriasAnuales />}
            />
          </Route>
          {/* Investigadores */}
          <Route path={PATHS.investigadores.path}>
            <Route
              path={PATHS.investigadores.children.asistentesInvestigacion.path}
              element={<AsistentesInvestigacion />}
            />
            <Route
              path={PATHS.investigadores.children.investigadoresAdjuntos.path}
              element={<InvestigadoresAdjuntos />}
            />
            <Route
              path={PATHS.investigadores.children.investigadoresAsociados.path}
              element={<InvestigadoresAsociados />}
            />
          </Route>
          {/* Revistas */}
          <Route path={PATHS.revistas.path}>
            <Route
              path={PATHS.revistas.children.revistaCientifica.path}
              element={<RevistaCientifica />}
            />
            <Route
              path={PATHS.revistas.children.revistaEscpogra.path}
              element={<RevistaEscpogra />}
            />
          </Route>
          {/* Investigaciones */}
          <Route path={PATHS.investigaciones.path}>
            <Route path={PATHS.investigaciones.children.proyectos.path}>
              <Route index element={<Proyectos />} />
              <Route path=":id" element={<Publicacion />} />
            </Route>
            <Route path={PATHS.investigaciones.children.documentosTrabajo.path}>
              <Route index element={<DocumentosTrabajo />} />
              <Route path=":id" element={<Publicacion />} />
            </Route>
            <Route path={PATHS.investigaciones.children.seriesTrabajo.path}>
              <Route index element={<SeriesTrabajo />} />
              <Route path=":id" element={<Publicacion />} />
            </Route>
          </Route>
          {/* Noticias */}
          <Route path={PATHS.noticias.path}>
            <Route index element={<Noticias />} />
            <Route path=":id" element={<Noticia />} />
          </Route>
          {/* Contacto */}
          <Route path={PATHS.contacto.path} element={<Contacto />} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default Main;
