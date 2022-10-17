import React from "react";
import styled from "styled-components";
import { Footer, Header, Main } from "../components";

const Container = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: var(--header-height) 1fr auto;
	grid-template-columns: 1fr;
	position: relative;
`;
function TemplateLayout() {
	return (
		<Container>
			<Header />
			<Main />
			<Footer />
		</Container>
	);
}

export default TemplateLayout;
