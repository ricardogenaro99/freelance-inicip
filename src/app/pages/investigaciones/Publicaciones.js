import React from "react";
import { CardPublicacion, SectionBasic } from "../../components";
import image from "../../../assets/images.jpg";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr));
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  gap: var(--gap-xxl);

  @media ${device.tabletS} {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  }
`;

function Publicaciones() {
  return (
    <SectionBasic title="Publicaciones">
      <Container>
        <CardPublicacion id="1" title="Post" urlImage={image}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quod
          corrupti, nesciunt laboriosam tempore sapiente autem fugiat veniam
          suscipit dolore necessitatibus, quia voluptatibus eius quos, sint
          quaerat eaque iusto magnam!
        </CardPublicacion>

        <CardPublicacion id="1" title="Post" urlImage={image}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quod
          corrupti, nesciunt laboriosam tempore
        </CardPublicacion>
      </Container>
    </SectionBasic>
  );
}

export default Publicaciones;
