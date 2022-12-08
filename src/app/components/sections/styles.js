import styled from "styled-components";

const maxWidth = "var(--max-width)";
const maxWidth2 = "var(--max-width-inner)";
const ContainerBasicStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  > .main-content {
    width: 100%;
    padding: var(--padding-global);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-l);

    > * {
      max-width: ${(props) => (props.isMainContent ? maxWidth : "none")};
      width: 100%;
    }
  }
`;

export const ContainerSectionStyle = styled(ContainerBasicStyle)`
  gap: ${(props) => (props.isMainContent ? "0" : "var(--gap-xxl)")};
  max-width: ${(props) => props.maxWidth || "none"};
  ${(props) =>
    props.sectionFullHeight &&
    props.translateY &&
    `transform: translateY(calc(var(--header-height) * -1));`}
  .section-content {
    display: grid;
    gap: ${(props) => props.gap};
    width: 100%;
    max-width: ${maxWidth2};
  }
`;

export const ContainerSubSectionStyle = styled(ContainerBasicStyle)`
  gap: ${(props) => (props.isMainContent ? "0" : "var(--gap-m)")};
  max-width: ${(props) => props.maxWidth || "none"};
  .subsection-content {
    display: grid;
    gap: ${(props) => props.gap};
    max-width: ${(props) => (props.isMainContent ? maxWidth : "none")};
    width: 100%;
  }
`;

export const Title = styled.h4`
  &,
  * {
    font-family: "Roboto";
    font-size: var(--font-size-xxxl);
    font-weight: 700;
    color: var(--color-primary);
    width: 100%;
    max-width: var(--max-width)
      ${(props) => props.maxWidthString && "!important"};
    margin: auto;
    text-align: ${(props) => props.textAlign}!important;
  }
`;

export const ContainerImages = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .static-container {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    background: ${(props) =>
      props.background ||
      "linear-gradient(to left, rgba(0, 0, 0, 0.3), #13271d)"};
    width: 100%;
    height: 100%;

    .static-content {
      margin: auto;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: var(--max-width);
      > * {
        color: var(--color-white);
      }
      > * {
        padding: 0 var(--padding-global-x);
      }
    }
  }
`;
