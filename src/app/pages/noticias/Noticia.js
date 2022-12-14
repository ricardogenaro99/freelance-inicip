import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import portadaNoticia_2 from "../../../assets/tmp/noticia (2).png";
import portadaNoticia_3 from "../../../assets/tmp/noticia (3).png";
import { Chip, SectionBasic, Spinner } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { API_ENDPOINT, PROPS_SECTION } from "../../utils/generalConst";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const ContainerChipFecha = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--gap-s);
`;

function Noticia() {
  const params = useParams();
  const { resetTheme } = useThemeHeader();
  const [data, setData] = useState({});

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    // loadData(params.id);
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
        <SectionBasic
          title="1ER ENCUENTRO DE DEPARTAMENTOS DE INVESTIGACIÓN DE LAS ESCUELAS DE POSGRADO DE LAS FF.AA. Y LA PNP"
          {...PROPS_SECTION}
          maxWidth="950px"
        >
          <Container>
            <ContainerChipFecha>
              <Chip>#Reunión</Chip>
              <span>19 abril - 2022</span>
            </ContainerChipFecha>
            <p>
              En abril, la Escuela de Posgrado de la PNP fue invitada para
              fortalecer los lazos de cooperación con fines de mejora en la
              gestión de la investigación.
            </p>
            <img src={portadaNoticia_2} alt="" />
            <p>
              Durante el mes de abril, el Área de Investigación de la Escuela de
              Posgrado de la PNP recibió la invitación por parte de la Escuela
              Superior de Guerra del Ejército (ESGE), con la finalidad impulsar
              la investigación científica entre las instituciones de posgrado de
              las Fuerzas Armadas y la Policía Nacional del Perú.
            </p>
            <p>
              El 19 de abril se realizó la reunión en las instalaciones de la
              Escuela Superior del Ejército (Chorrillos, Lima) , la cual contó
              con la asistencia de los representantes de los Departamentos de
              Investigación de de la Escuela Superior del Guerra del Ejército –
              Escuela de Posgrado (ESGE), Escuela Superior de Guerra Naval
              (ESUP) y la Escuela de Posgrado de la Policía Nacional del Perú
              (ESCPOGRA PNP).
            </p>
            <p>
              La Escuela de Posgrado de la PNP estuvo representada por el jefe
              del Área de Investigación, Crnl. PNP Yván Febres, quien realizó
              una presentación general del Área de Investigación e hizo
              extensivo el saludo institucional de parte del Director de la
              ESCPOGRA, Crnl. PNP Nilton Santos.
            </p>
            <p>
              La exposición de los avances realizados por la ESCPOGRA PNP estuvo
              a cargo del Mg. Alejandro Mejía, asesor del Área de Investigación,
              en la cual se dio a conocer la reestructuración del Área para su
              fortalecimiento en función de la acreditación de los programas de
              posgrado, así como el trabajo que se viene realizando con la
              implementación del Instituto de Investigación en Ciencias
              Policiales (INICIP) y con la Revista Académica de la ESCPOGRA PNP.{" "}
            </p>
            <p>
              La reunión culminó con la firma del "Acta de Acuerdos de la I
              Reunión de Acercamiento Institucional entre las Áreas o
              Departamentos de Investigación de las Escuelas de Posgrado de las
              FF.AA. y PNP AF - 2022", el cual establece los lazos iniciales de
              trabajo interinstitucional, iniciar el proyecto de una alianza
              estratégica, intercambiar publicaciones académicas (artículos
              científicos, de opinión, monografías, etc), así como la
              implementación de un Seminario Internacional entre las Escuelas de
              Posgrado.
            </p>
            <img src={portadaNoticia_3} alt="" />
            <h5>ESCPOGRA PNP será sede de la próxima reunión</h5>
            <p>
              Durante el encuentro, el jefe del Área de Investigación de la
              ESCPOGRA PNP, Crnl. PNP Roberto Febres, puso en manifiesto la
              disposición de la Escuela de Posgrado de la PNP para ser sede de
              la próxima reunión entre los Departamentos de Investigación de las
              Escuelas de Posgrado de las FF.AA. y la PNP, con el objetivo de
              continuar trabajando de manera coordinada para la implementación
              de los acuerdos sostenidos en la reunión.
            </p>
            <p>
              La próxima reunión se realizará en las instalaciones de la
              ESCPOGRA PNP.
            </p>
          </Container>
        </SectionBasic>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Noticia;
