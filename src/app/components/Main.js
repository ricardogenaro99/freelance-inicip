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
	flex-direction: column;
	padding: var(--padding-global);
`;
function Main() {
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
						<Route
							path={PATHS.investigaciones.children.publicaciones.path}
							element={<Publicaciones />}
						/>
					</Route>
					<Route path={PATHS.contacto.path} element={<Contacto />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Container>
	);
}

export default Main;
