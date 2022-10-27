import React, { useEffect, useState } from "react";
import { portadaEquipo } from "../../../assets/portadas";
import { CardBasic, SectionBasic } from "../../components";
import styled from "styled-components";
import { device } from "../../utils/generalBreakpoints";
import axios from "axios";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr));
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  gap: var(--gap-xxl);

  @media ${device.tabletS} {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  }
`;

function Equipo() {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("https://randomuser.me/api/?results=4");
        const data = await res.data.results.map((e, i) => {
          return {
            id: i,
            name: `${e.name.title} ${e.name.first} ${e.name.last}`,
            content:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            image: e.picture.large,
          };
        });
        setEquipo(data);
      } catch (error) {
        console.log(error);
      }
    };

    return () => getData();
  }, []);

  return (
    <SectionBasic title="Equipo" image={portadaEquipo}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam
      laboriosam deserunt eum alias repellat nobis a quod? Itaque fugit
      molestiae recusandae dolore quas inventore. Officia quae eius sed vitae.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quia
      adipisci explicabo fugiat voluptatum iusto libero magni, officia, odit
      dolorem debitis similique unde possimus. Nobis ipsum libero voluptatem
      sunt esse.
      <Container>
        {equipo.map((e) => (
          <CardBasic key={e.id} id={e.id} title={e.name} image={e.image}>
            {e.content}
          </CardBasic>
        ))}
      </Container>
    </SectionBasic>
  );
}

export default Equipo;
