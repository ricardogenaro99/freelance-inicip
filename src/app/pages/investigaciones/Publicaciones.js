import axios from "axios";
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
import { API_ENDPOINT } from "../../utils/generalConst";

const ContainerControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-s);
  background: var(--color-white);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 126px), 1fr));
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

const initForm = {
  author: "",
  title: "",
  date: "",
};

function Publicaciones() {
  const [data, setData] = useState();
  const { resetTheme } = useThemeHeader();
  const { widthWindow } = useWindowDimensions();
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [filterForm, setFilterForm] = useState(initForm);

  useEffect(() => {
    setShowFilterForm(widthWindow <= valuePx.tabletL);
  }, [widthWindow]);

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

  const hnadleChangeFilterForm = (e) => {
    const { name, value } = e.target;
    setFilterForm({ ...filterForm, [name]: value });
  };

  const handleSubmitFilterForm = (e) => {
    e.preventDefault();
    console.log(filterForm);
  };

  const handleResetFilterForm = () => {
    setFilterForm(initForm);
  };

  const renderControlButtons = (e) => {
    return (
      <ContainerControlButtons>
        <ButtonRectangle
          as="a"
          href={e.urlPdf || urlPdf}
          target="_blank"
          rel="noreferrer"
          background="var(--color-secondary)"
        >
          <span>Descargar</span>
          <FaFileDownload color="white" />
        </ButtonRectangle>
        <ButtonRectangle as={Link} to={String(e.id)}>
          <span>Ver mas</span>
          <FaExternalLinkSquareAlt />
        </ButtonRectangle>
      </ContainerControlButtons>
    );
  };

  const renderFilterForm = () => {
    return (
      <ContainerForm onSubmit={handleSubmitFilterForm}>
        <div className="inputs-container">
          <InputLabel
            label="Autor"
            name="author"
            placeholder="Ingrese el nombre del autor"
            value={filterForm.author}
            onChange={hnadleChangeFilterForm}
          />
          <InputLabel
            label="Titulo"
            name="title"
            placeholder="Ingrese el titulo de la publicación"
            value={filterForm.title}
            onChange={hnadleChangeFilterForm}
          />
          <InputDatePicker
            label="Fecha de publicación"
            nameState="date"
            placeholder="Seleccione una fecha"
            valueState={filterForm.date}
            setState={hnadleChangeFilterForm}
          />
        </div>

        <ContainerControlButtons>
          <ButtonRectangle
            background="var(--color-secondary)"
            type="button"
            onClick={handleResetFilterForm}
          >
            <span>Limpiar</span>
            <BiReset color="white" />
          </ButtonRectangle>
          <ButtonRectangle type="submit">
            <span>Buscar</span>
            <FaSearch />
          </ButtonRectangle>
        </ContainerControlButtons>
      </ContainerForm>
    );
  };

  return (
    <SectionWhitImage title="Publicaciones" image={portadaPublicaciones}>
      <TwoSectionsMenu customBoxs={[renderFilterForm()]} hasBoxMenu={false}>
        {showFilterForm && renderFilterForm()}
        {data ? (
          <CardList data={data} controlButtons={renderControlButtons} />
        ) : (
          "cargando..."
        )}
      </TwoSectionsMenu>
    </SectionWhitImage>
  );
}

export default Publicaciones;
