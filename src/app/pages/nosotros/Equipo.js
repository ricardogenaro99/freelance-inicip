import axios from "axios";
import React, { useEffect, useState } from "react";
import { portadaEquipo } from "../../../assets/portadas";
import { CardList, SectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import TwoSectionsMenu from "../../templates/TwoSectionsMenu";
import {
  PROPS_SECTION
} from "../../utils/generalConst";
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
    <SectionBasic title="Equipo" image={portadaEquipo} {...PROPS_SECTION}>
      <TwoSectionsMenu>
        
        <CardList data={equipo} />
      </TwoSectionsMenu>
    </SectionBasic>
  );
}

export default Equipo;
