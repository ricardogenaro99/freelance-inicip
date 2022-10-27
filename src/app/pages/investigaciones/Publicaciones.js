import React from "react";
import { CardBasic, SectionBasic } from "../../components";
import image from "../../../assets/images.jpg";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr)); */
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  gap: var(--gap-xxl);

  /* @media ${device.tabletS} {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  } */
`;

function Publicaciones() {
  return (
    <SectionBasic title="Publicaciones">
      <Container>
        <CardBasic id="1" title="Static post 1" image={image}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit
          alias aperiam tempora. Delectus a ducimus eos libero officiis nobis,
          mollitia repudiandae eligendi? Fuga dolorem, repudiandae iure
          assumenda eaque ea? Minus sunt placeat amet omnis. Voluptates
          molestiae esse explicabo sapiente, distinctio tenetur blanditiis
          obcaecati qui, quo, ipsum neque dicta quasi rerum! Incidunt natus
          consectetur, veritatis nesciunt minima exercitationem magni? Nisi
          commodi ullam iure quia quidem, dolorem quam nam quos unde corrupti
          blanditiis recusandae nemo doloremque magnam consequuntur eius dolor.
          Aspernatur asperiores accusantium ratione molestiae molestias,
          corporis quam maxime natus? Odit, maiores! Magni assumenda quas modi
          natus, vitae iste officiis molestias sit, dignissimos non aliquam esse
          nemo minima accusantium libero veritatis voluptatum. Tempore nobis
          labore inventore commodi. Commodi dolor ad culpa labore necessitatibus
          corrupti ratione sed unde earum totam aperiam consectetur perspiciatis
          illo quas, eius,
        </CardBasic>

        <CardBasic id="2" title="Static post 2" image={image}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quod
          corrupti, nesciunt laboriosam tempore
        </CardBasic>
      </Container>
    </SectionBasic>
  );
}

export default Publicaciones;
