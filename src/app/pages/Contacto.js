import React, { useEffect } from "react";
import { SectionBasic } from "../components";
import { useThemeHeader } from "../contexts/ThemeHeaderProvider";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;
function Contacto() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic title="Contactanos" isMainContent>
      <Container>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          iusto quaerat ex vitae mollitia, deserunt nesciunt repellat minus,
          voluptatem, magnam quam! Culpa sed maxime quam ipsam minima
          voluptatibus facere corporis.
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0597053908245!2d-76.99393368474195!3d-12.176338447640685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9cbbb496cf1%3A0xd7fdac541760db67!2sEscuela%20de%20Oficiales%20de%20la%20Polic%C3%ADa%20Nacional%20del%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1668147560042!5m2!1ses-419!2spe"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="hola"
          ></iframe>
        </section>
      </Container>
    </SectionBasic>
  );
}

export default Contacto;
