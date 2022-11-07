import React, { useEffect, useState } from "react";
import { FaExternalLinkSquareAlt, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { portadaPublicaciones } from "../../../assets/portadas";
import image from "../../../assets/tmp/images.png";
import urlPdf from "../../../assets/tmp/pdf-prueba.pdf";
import { ButtonRectangle, CardList, SectionWhitImage } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";

const ContainerControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-s);
  background: var(--color-white);
`;

const initData = [
  {
    id: 1,
    title: "Static post 1",
    image,
    content: `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>`,
    urlPdf,
  },
  {
    id: 2,
    title: "Static post 2",
    image,
    content: `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architect`,
    urlPdf,
  },
];

function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    setPublicaciones(initData);
  }, []);

  function controlButtons(e) {
    return (
      <ContainerControlButtons>
        <ButtonRectangle
          as="a"
          href={e.urlPdf}
          target="_blank"
          rel="noreferrer"
          background="var(--color-secondary)"
        >
          Descargar
          <FaFileDownload color="white" />
        </ButtonRectangle>
        <ButtonRectangle as={Link} to={String(e.id)}>
          Ver mas
          <FaExternalLinkSquareAlt />
        </ButtonRectangle>
      </ContainerControlButtons>
    );
  }

  return (
    <SectionWhitImage title="Publicaciones" image={portadaPublicaciones}>
      <TwoSectionsMenu>
        <CardList data={publicaciones} controlButtons={controlButtons} />
      </TwoSectionsMenu>
    </SectionWhitImage>
  );
}

export default Publicaciones;
