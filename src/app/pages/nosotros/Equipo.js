import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { portadaEquipo } from "../../../assets/portadas";
import { CardBasic, CardList, SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import { device } from "../../utils/generalBreakpoints";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: var(--gap-l);

  @media ${device.tabletS} {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  }
`;

function Equipo() {
  const [equipo, setEquipo] = useState([]);
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("https://randomuser.me/api/?results=4");
        const data = await res.data.results.map((e, i) => {
          return {
            id: i,
            title: `${e.name.title} ${e.name.first} ${e.name.last}`,
            content:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur autpo quisquam est",
            image: e.picture.large,
          };
        });
        setEquipo(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <SectionBasic title="Equipo" image={portadaEquipo} isMainContent>
      <TwoSectionsMenu>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam
          laboriosam deserunt eum alias repellat nobis a quod? Itaque fugit
          molestiae recusandae dolore quas inventore. Officia quae eius sed
          vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          quia adipisci explicabo fugiat voluptatum iusto libero magni, officia,
          odit dolorem debitis similique unde possimus. Nobis ipsum libero
          voluptatem sunt esse.
        </p>
        <CardList data={equipo} />
      </TwoSectionsMenu>
    </SectionBasic>
  );
}

export default Equipo;
