import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Spinner() {
  return (
    <Container>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="var(--color-white)"
        color="var(--color-primary)"
      />
    </Container>
  );
}
