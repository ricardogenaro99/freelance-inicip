import React, { useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import image from "../../../assets/tmp/images.png";
import urlPdf from "../../../assets/tmp/pdf-prueba.pdf";
import { ButtonRectangle, SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";

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

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    console.log(params.id);
  }, [params]);

  return (
    <SectionBasic title="Titulo de la publicacion" isMainContent>
      <Container>
        <section className="section-info">
          <div className="image-container">
            <img src={image} alt="cover" />
          </div>
          <div className="meta-container">
            <ContainerMeta>
              <div className="wrapper">
                <span className="wrapper-label">Autor(es): </span>
                <span className="wrapper-value">
                  Autor de Prueba Estatico 1 y Autor de Prueba Estatico 2
                </span>
              </div>
              <div className="wrapper">
                <span className="wrapper-label">Fecha de publicación: </span>
                <span className="wrapper-value">06-11-2022</span>
              </div>
              <div className="wrapper">
                <span className="wrapper-label">Palabras claves: </span>
                <span className="wrapper-value">06-11-2022</span>
              </div>
            </ContainerMeta>
            <ContainerControlButtons>
              <ButtonRectangle
                as="a"
                href={urlPdf}
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          explicabo nemo blanditiis delectus? Pariatur dolorem error, architecto
          id consequuntur, iste in maxime cumque exercitationem, minus
          voluptates nemo modi adipisci natus odio numquam deserunt molestias
          nam magni. Odio laudantium rem magni neque dolores quis. Harum quia
          sint ut, officia cupiditate sapiente tenetur, inventore, voluptate
          ratione debitis nisi quo. Beatae in sunt expedita similique quae? Iure
          pariatur laboriosam repellendus! Officiis beatae quia cupiditate illum
          eos sint ea nemo rem cum maxime error, magni deserunt maiores
          voluptatum praesentium. Mollitia et sequi minus rerum magnam cumque
          delectus asperiores explicabo, eveniet eligendi quibusdam nobis
          facilis quasi animi saepe eius cupiditate reiciendis, maiores odit?
          Officiis voluptate ipsam optio nihil. Et voluptatum mollitia labore
          asperiores? Ratione eaque veritatis quidem fugit iusto id a deserunt,
          excepturi ipsam officia veniam ad, recusandae voluptate dignissimos.
          Aliquid atque consequuntur perferendis facere hic quae nobis assumenda
          maiores quibusdam error suscipit ut pariatur eligendi quos eveniet
          quas ex ipsum impedit voluptatibus, a cumque repellat. Explicabo nisi
          maiores vero itaque libero sit quod tempore, eum distinctio quae
          quisquam ratione esse doloremque. Cupiditate eum possimus vero labore!
          Blanditiis deserunt eum a nulla dignissimos, beatae quasi sit
          doloribus facere dolorum sequi! Eos blanditiis sunt est totam.
        </section>
      </Container>
    </SectionBasic>
  );
}

export default Publicacion;
