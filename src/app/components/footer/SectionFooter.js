import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--gap-l);
  max-width: 290px;

  h4 {
    font-size: 18px;
    text-align: center;
  }

  .children {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
  }
  @media ${device.tabletM} {
    * {
      text-align: center !important;
    }
  }
`;

function SectionFooter({ title, children }) {
  return (
    <Container>
      {title && <h4>{title}</h4>}
      <div className="children">{children}</div>
    </Container>
  );
}

export default SectionFooter;
