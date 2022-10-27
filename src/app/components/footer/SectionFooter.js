import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--gap-m);
  @media ${device.tabletS} {
    * {
      text-align: center;
    }
  }
`;

function SectionFooter({ title, children }) {
  return (
    <Container>
      {title && <h4>{title}</h4>}
      <div>{children}</div>
    </Container>
  );
}

export default SectionFooter;
