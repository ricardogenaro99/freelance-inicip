import styled from "styled-components";

export const SeparatorBasic = styled.div`
  border${(props) => props.position || ""}-width: ${(props) =>
  props.width || "1px"};
  border${(props) => props.position || ""}-style: ${(props) =>
  props.style || "solid"};
  border${(props) => props.position || ""}-color: ${(props) =>
  props.color || "var(--color-primary)"};
`;
