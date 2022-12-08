import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import portadaNoticia_1 from "../../../../assets/tmp/noticia (1).png";
import portadaNoticia_2 from "../../../../assets/tmp/noticia (2).png";
import portadaNoticia_3 from "../../../../assets/tmp/noticia (3).png";
import { CardNoticia, SubSectionBasic } from "../../../components";
import { device } from "../../../utils/generalBreakpoints";
import { API_ENDPOINT } from "../../../utils/generalConst";

const ContainerNoticias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(calc(100% / 4), 1fr)); */
  grid-auto-columns: 1fr;
  gap: var(--gap-xxl) var(--gap-l);

  @media ${device.tabletM} {
    grid-template-columns: 1fr;
  }
`;

function UltimasNoticias() {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      title:
        "1ER ENCUENTRO DE DEPARTAMENTOS DE INVESTIGACIÓN DE LAS ESCUELAS DE POSGRADO DE LAS FF.AA. Y LA PNP",
      image: portadaNoticia_1,
      content:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>",
      urlPdf: "",
      createdAt: "19 abril - 2022",
    },
    {
      id: 2,
      title: "NOTICIA ESTATICA DE EJEMPLO",
      image: portadaNoticia_2,
      content:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>",
      urlPdf: "",
      createdAt: "19 abril - 2022",
    },
    {
      id: 3,
      title: "NOTICIA ESTATICA DE EJEMPLO",
      image: portadaNoticia_3,
      content:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archiatem. Ut enim ad mluptas nulla pariatur?</p>",
      urlPdf: "",
      createdAt: "19 abril - 2022",
    },
  ]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios(`${API_ENDPOINT}/posts`);
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setNoticias(data.slice(0, 3));
      } catch (error) {
        setNoticias([]);
      }
    };

    // // loadData();
  }, []);
  return (
    <>
      {noticias && noticias.length >= 3 && (
        <SubSectionBasic
          title="Últimas Noticias"
          titleStyle={{
            fontSize: "var(--font-size-xxl)",
            textAlign: "center",
          }}
        >
          <ContainerNoticias>
            {noticias.slice(0, 3).map((e, i) => (
              <CardNoticia key={i} {...e} />
            ))}
          </ContainerNoticias>
        </SubSectionBasic>
      )}
    </>
  );
}

export default UltimasNoticias;
