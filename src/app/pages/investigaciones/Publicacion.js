import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import image from "../../../assets/tmp/images.png";
import urlPdf from "../../../assets/tmp/pdf-prueba.pdf";
import { ButtonRectangle, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";
import { API_ENDPOINT } from "../../utils/generalConst";
import { parseHtml } from "../../utils/generalFunctions";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: column;
  gap: var(--gap-xl);
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
      font-weight: 600;
    }
  }
`;

function Publicacion() {
  const params = useParams();
  const { resetTheme } = useThemeHeader();
  const [data, setData] = useState();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    loadData(params.id);
  }, [params]);

  const loadData = async (id) => {
    try {
      const response = await axios(`${API_ENDPOINT}/posts/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data ? (
        <SectionBasic title={data?.title} isMainContent>
          <Container>
            <section className="section-info">
              <div className="image-container">
                <img src={data?.image || image} alt="cover" />
              </div>
              <div className="meta-container">
                <ButtonRectangle
                  as="a"
                  href={data?.urlPdf || urlPdf}
                  target="_blank"
                  rel="noreferrer"
                  background="var(--color-secondary)"
                >
                  Descargar
                  <FaFileDownload color="white" />
                </ButtonRectangle>
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
                  <span className="wrapper-label">Fecha de publicación: </span>
                  <span className="wrapper-value">
                    {data?.createdAt || new Date().toDateString()}
                  </span>
                </div>
              </ContainerMeta>
            </section>
          </Container>
        </SectionBasic>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Publicacion;
