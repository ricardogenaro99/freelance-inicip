import React, { useEffect, useState } from "react";
import { BiReset } from "react-icons/bi";
import {
  FaExternalLinkSquareAlt,
  FaFileDownload,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { portadaPublicaciones } from "../../../assets/portadas";
import image from "../../../assets/tmp/images.png";
import urlPdf from "../../../assets/tmp/pdf-prueba.pdf";
import {
  ButtonRectangle,
  CardList,
  InputDatePicker,
  InputLabel,
  SectionWhitImage,
} from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useWindowDimensions } from "../../hooks";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { valuePx } from "../../utils/generalBreakpoints";

const ContainerControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-s);
  background: var(--color-white);
`;

const ContainerControlButtonsForm = styled(ContainerControlButtons)`
  > * {
    /* width: 50%; */
    /* height: 100%; */
  }
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  .inputs-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
    gap: var(--gap-m);
  }
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
  const { widthWindow } = useWindowDimensions();
  const [showFilterForm, setShowFilterForm] = useState(false);

  useEffect(() => {
    setShowFilterForm(widthWindow <= valuePx.tabletL);
  }, [widthWindow]);

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    setPublicaciones(initData);
  }, []);

  function renderControlButtons(e) {
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

  const renderFilterForm = () => {
    return (
      <ContainerForm onSubmit={() => console.log("xd")}>
        <div className="inputs-container">
          <InputLabel
            label="Autor"
            name="autor"
            placeholder="Ingrese el nombre del autor"
          />
          <InputLabel
            label="Titulo"
            name="titulo"
            placeholder="Ingrese el titulo de la publicación"
          />
          <InputDatePicker
            label="Fecha de publicación"
            placeholder="Seleccione una fecha"
          />
        </div>

        <ContainerControlButtonsForm>
          <ButtonRectangle background="var(--color-secondary)" type="button">
            Limpiar
            <BiReset color="white" />
          </ButtonRectangle>
          <ButtonRectangle type="submit">
            Buscar
            <FaSearch />
          </ButtonRectangle>
        </ContainerControlButtonsForm>
      </ContainerForm>
    );
  };

  return (
    <SectionWhitImage title="Publicaciones" image={portadaPublicaciones}>
      <TwoSectionsMenu customBoxs={[renderFilterForm()]} hasBoxMenu={false}>
        {showFilterForm && renderFilterForm()}
        <CardList data={publicaciones} controlButtons={renderControlButtons} />
      </TwoSectionsMenu>
    </SectionWhitImage>
  );
}

export default Publicaciones;
