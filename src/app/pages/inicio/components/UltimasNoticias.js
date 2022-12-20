import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardNoticia, SubSectionBasic } from "../../../components";
import { device } from "../../../utils/generalBreakpoints";
import { getPosts } from "../../../utils/generalFunctions";

const ContainerNoticias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 10px;
  grid-auto-columns: 1fr;
  gap: var(--gap-xxl) var(--gap-l);

  @media ${device.tabletM} {
    grid-template-columns: 1fr;
  }
`;

function UltimasNoticias() {
  const [noticias, setNoticias] = useState();

  useEffect(() => {
    const init = async () => {
      const response = await getPosts("noticias");
      setNoticias(response.slice(0, 3));
    };

    init();
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
            {noticias.map((e, i) => (
              <CardNoticia key={i} {...e} />
            ))}
          </ContainerNoticias>
        </SubSectionBasic>
      )}
    </>
  );
}

export default UltimasNoticias;
