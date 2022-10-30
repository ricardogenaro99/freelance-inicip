import styled from "styled-components";

export const ContainerSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxl);

  .section-content {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
    padding: 0 0.2%;
  }
`;

export const ContainerSubSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  .subsection-content {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
  }
`;
