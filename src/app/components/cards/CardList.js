import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import { SeparatorBasic } from "../Separator";
import CardBasic from "./CardBasic";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  @media ${device.tabletS} {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
  }

  @media ${device.mobileL} {
    gap: var(--gap-l);
  }
`;

function CardList({ data, controlButtons }) {
  return (
    <Container>
      {data.map((e, i) => (
        <Fragment key={i}>
          <CardBasic
            title={e.title}
            image={e.image}
            controlButtons={controlButtons && controlButtons(e)}
          >
            {e.content}
          </CardBasic>
          {data.length - 1 !== i && <SeparatorBasic position="-top" />}
        </Fragment>
      ))}
    </Container>
  );
}

export default CardList;
