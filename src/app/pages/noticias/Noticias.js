import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardNoticia, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { PROPS_SECTION_CENTER_TITLE } from "../../utils/generalConst";
import { getPosts } from "../../utils/generalFunctions";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: var(--gap-xxl);
  margin: auto;
  width: 100%;
  padding: 20px;
`;

function Noticias() {
  const [data, setData] = useState();
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    const init = async () => {
      const res = await getPosts("noticias");
      setData(res);
    };

    init();
  }, []);

  return (
    <SectionBasic title="Noticias" {...PROPS_SECTION_CENTER_TITLE}>
      {!data ? (
        <Spinner />
      ) : (
        <Container>
          {data.length === 0 ? (
            <span>No se encontro contenido disponible</span>
          ) : (
            data.map((e, i) => <CardNoticia key={i} {...e} />)
          )}
        </Container>
      )}
    </SectionBasic>
  );
}

export default Noticias;
