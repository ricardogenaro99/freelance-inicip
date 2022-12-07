import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardList, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import {
  API_ENDPOINT,
  PROPS_SECTION_CENTER_TITLE,
} from "../../utils/generalConst";

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
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios(`${API_ENDPOINT}/posts`);
      setData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setData([]);
      console.log(error);
    }
  };

  return (
    <SectionBasic title="Documentos de Trabajo" {...PROPS_SECTION_CENTER_TITLE}>
      <Container>
        {data ? <CardList data={data} redirect={true} /> : <Spinner />}
      </Container>
    </SectionBasic>
  );
}

export default Proyectos;
