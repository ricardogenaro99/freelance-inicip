import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardList, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { PROPS_SECTION_CENTER_TITLE } from "../../utils/generalConst";
import { getPosts } from "../../utils/generalFunctions";

const Container = styled.div`
  max-width: 900px;
  display: grid;
  gap: var(--gap-xl);
  margin: auto;
  width: 100%;
`;

function Proyectos() {
  const [data, setData] = useState();
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    const init = async () => {
      const res = await getPosts("proyectos");
      setData(res);
    };

    init();
  }, []);

  return (
    <SectionBasic title="Proyectos" {...PROPS_SECTION_CENTER_TITLE}>
      <Container>
        {data ? <CardList data={data} redirect={true} /> : <Spinner />}
      </Container>
    </SectionBasic>
  );
}

export default Proyectos;
