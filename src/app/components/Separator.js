import styled from "styled-components";

const posGradientInit = '10%'
const posGradientEnd = '70%'

export const SeparatorBasic = styled.div`
  border${(props) => props.position || ""}-width: ${(props) =>
  props.width || "1px"};
  border${(props) => props.position || ""}-style: ${(props) =>
  props.style || "solid"};
  border${(props) => props.position || ""}-color: ${(props) =>
  props.color || "var(--color-primary)"};
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10%;
    height: 1px;
    background: white;
    bottom: 0;
  }

  &::after{
    right: 0;
    background: rgb(255,255,255);
    background: linear-gradient(270deg, rgba(255,255,255,1) ${posGradientInit}, rgba(0,89,19,1) ${posGradientEnd});
  }

  &::before{
    left: 0;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) ${posGradientInit}, rgba(0,89,19,1) ${posGradientEnd});
  }
`;
