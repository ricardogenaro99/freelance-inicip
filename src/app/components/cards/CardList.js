import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { SeparatorBasic } from "../Separator";
import CardBasic from "./CardBasic";
import image from "../../../assets/tmp/images.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  @media ${device.mobileL} {
    gap: var(--gap-l);
  }
`;

function CardList({ data = [], controlButtons }) {
  return (
    <Container>
      {data.length > 0 ? (
        data.map((e, i) => (
          <Fragment key={i}>
            <CardBasic
              title={e.title}
              image={e.image || image}
              controlButtons={controlButtons && controlButtons(e)}
            >
              {e.content}
            </CardBasic>
            {data.length - 1 !== i && <SeparatorBasic position="-top" />}
          </Fragment>
        ))
      ) : (
        <span>No se encontro contenido disponible</span>
      )}
    </Container>
  );
}

export default CardList;
