import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../../../assets/images.jpg";
import { portadaPublicaciones } from "../../../assets/portadas";
import { CardBasic, SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr)); */
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  gap: var(--gap-xxl);

  /* @media ${device.tabletS} {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  } */
`;

const initData = [
  {
    id: 1,
    title: "Static post 1",
    image,
    content: `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad mluptas nulla pariatur?</p>`,
  },
  {
    id: 2,
    title: "Static post 2",
    image,
    content: `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>`,
  },
];

function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    setPublicaciones(initData);
  }, []);

  const handleClick = (id = "") => {
    navigate(`${location.pathname}/${id}`);
  };

  return (
    <SectionBasic
      title="Publicaciones"
      image={portadaPublicaciones}
      isMainContent
    >
      <Container>
        {publicaciones.map((e) => (
          <CardBasic
            key={e.id}
            id={e.id}
            title={e.title}
            image={e.image}
            handleClick={() => handleClick(e.id)}
          >
            {e.content}
          </CardBasic>
        ))}
      </Container>
    </SectionBasic>
  );
}

export default Publicaciones;
