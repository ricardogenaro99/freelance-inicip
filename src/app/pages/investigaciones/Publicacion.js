import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ButtonRectangle, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";
import { PROPS_SECTION } from "../../utils/generalConst";
import { getPostById, parseHtml } from "../../utils/generalFunctions";
import NotFound from "../NotFound";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: column;
  gap: var(--gap-xl);
  align-items: start;
  .section-info {
    display: grid;
    gap: var(--gap-m);

    .image-container {
      img {
        object-fit: cover;
        width: 100%;
      }
    }

    .meta-container {
      display: flex;
      flex-direction: column;
      gap: var(--gap-m);
    }
  }

  .section-text {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xl);

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);

    .section-info {
      grid-template-columns: 250px 1fr;
    }
  }

  @media ${device.tabletS} {
    .section-info {
      grid-template-columns: 1fr;
    }
  }
`;

const ContainerMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  gap: var(--gap-s);

  * {
    font-size: var(--font-size-s);
  }

  .wrapper {
    display: flex;
    grid-template-columns: 130px 1fr;
    gap: var(--gap-l);

    .wrapper-label {
      font-weight: 500;
      color: var(--color-dark);
    }
    .wrapper-value {
      color: var(--color-primary);
      font-weight: 700;
    }
  }
`;

function Publicacion({ type = "" }) {
  const params = useParams();
  const { resetTheme } = useThemeHeader();
  const [data, setData] = useState(null);

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    const init = async () => {
      const res = await getPostById(params.id, type);
      setData(res);
    };

    init();
  }, [params, type]);

  return (
    <>
      {data !== null ? (
        data === undefined ? (
          <NotFound />
        ) : (
          <SectionBasic title={data?.title} {...PROPS_SECTION}>
            <Container>
              <section className="section-info">
                <div className="image-container">
                  <img src={data?.image} alt="cover" />
                </div>
                <div className="meta-container">
                  {data?.urlPdf && (
                    <ButtonRectangle
                      as="a"
                      href={data?.urlPdf}
                      target="_blank"
                      rel="noreferrer"
                      background="var(--color-brown)"
                    >
                      Descargar
                      <FaFileDownload color="white" />
                    </ButtonRectangle>
                  )}
                </div>
              </section>
              <section className="section-text">
                <div className="content-post">{parseHtml(data?.content)}</div>
                <ContainerMeta>
                  <div className="wrapper">
                    <span className="wrapper-label">Autor(es): </span>
                    <span className="wrapper-value">{data?.authors}</span>
                  </div>
                  <div className="wrapper">
                    <span className="wrapper-label">
                      Fecha de publicación:{" "}
                    </span>
                    <span className="wrapper-value">
                      {new Date(data?.createdAt).toLocaleString()}
                    </span>
                  </div>
                </ContainerMeta>
              </section>
            </Container>
          </SectionBasic>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Publicacion;
