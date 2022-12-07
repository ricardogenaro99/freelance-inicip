import React from "react";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--gap-xl);

  h4 {
    font-size: var(--font-size-l);
  }

  .children {
    display: flex;
    flex-direction: column;
    gap: var(--gap-l);
  }
  @media ${device.tabletS} {
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
