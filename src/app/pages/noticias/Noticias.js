import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardNoticia, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import {
  API_ENDPOINT,
  PROPS_SECTION_CENTER_TITLE
} from "../../utils/generalConst";

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
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios(`${API_ENDPOINT}/posts`);
      setData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      setData([]);
      console.log(error);
    }
  };

  return (
    <SectionBasic title="Noticias" {...PROPS_SECTION_CENTER_TITLE}>
      {!data ? (
        <Spinner />
      ) : (
        <Container>
          {data.map((e, i) => (
            <CardNoticia key={i} {...e} />
          ))}
        </Container>
      )}
    </SectionBasic>
  );
}

export default Noticias;
