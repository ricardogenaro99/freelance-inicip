import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Chip, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { PROPS_SECTION } from "../../utils/generalConst";
import { getPostById, parseHtml } from "../../utils/generalFunctions";
import NotFound from "../NotFound";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const ContainerChipFecha = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--gap-s);
`;

const ContainerChips = styled.div`
  display: flex;
  gap: var(--gap-s);
`;
function Noticia() {
  const params = useParams();
  const { resetTheme } = useThemeHeader();
  const [data, setData] = useState(null);

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    const init = async () => {
      const res = await getPostById(params.id, "noticias");
      console.log(res);
      setData(res);
    };

    init();
  }, [params]);

  return (
    <>
      {data !== null ? (
        data === undefined ? (
          <NotFound />
        ) : (
          <SectionBasic title={data?.title} {...PROPS_SECTION} maxWidth="950px">
            <Container>
              <ContainerChipFecha>
                <ContainerChips>
                  {data?.tags.map((e, i) => (
                    <Chip key={i}>#{e}</Chip>
                  ))}
                </ContainerChips>

                <span>{new Date(data?.createdAt).toLocaleDateString()}</span>
              </ContainerChipFecha>
              {parseHtml(data?.content)}
            </Container>
          </SectionBasic>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Noticia;
