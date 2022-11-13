import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import image from "../../../assets/tmp/images.png";
import urlPdf from "../../../assets/tmp/pdf-prueba.pdf";
import { ButtonRectangle, SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";
import { API_ENDPOINT } from "../../utils/generalConst";
import { parseHtml } from "../../utils/generalFunctions";

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: column;
  gap: var(--gap-xl);
  .section-info {
    display: grid;
    gap: var(--gap-l);

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
      padding: 10px;
    }
  }

  @media ${device.tabletL} {
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
    display: grid;
    grid-template-columns: 85px 1fr;
    gap: var(--gap-s);

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

const ContainerControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-l);
  background: var(--color-white);
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
                <ContainerMeta>
                  <div className="wrapper">
                    <span className="wrapper-label">Autor(es): </span>
                    <span className="wrapper-value">{data?.authors}</span>
                  </div>
                  <div className="wrapper">
                    <span className="wrapper-label">
                      Fecha de publicación:{" "}
                    </span>
                    <span className="wrapper-value">{data?.createdAt}</span>
                  </div>
                  <div className="wrapper">
                    <span className="wrapper-label">Palabras claves: </span>
                    <span className="wrapper-value">{data?.keywords}</span>
                  </div>
                </ContainerMeta>
                <ContainerControlButtons>
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
                </ContainerControlButtons>
              </div>
            </section>
            <section className="section-text">
              {parseHtml(data?.content)}
            </section>
          </Container>
        </SectionBasic>
      ) : (
        "cargando..."
      )}
    </>
  );
}

export default Publicacion;
