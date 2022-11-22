import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import { mapReference } from "../../../assets/map";
import {
  ButtonRectangle,
  InputLabel,
  SectionBasic,
  TextareaLabel
} from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";
import { PROPS_SECTION } from "../../utils/generalConst";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-auto-rows: auto;
  gap: var(--gap-xl);

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`;

const ContainerControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-s);
  background: var(--color-white);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 150px), 1fr));
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);

  .inputs-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: var(--gap-l);
  }
`;

const ContainerMap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: var(--border-radius-global);
  /* height: 100%; */
  &:after {
    content: "";
    position: absolute;
    background: #00000087;
    width: 100%;
    height: 100%;
    transform: translate(80%, -80%);
    border-bottom-left-radius: 100%;
    transition: var(--transition);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.58, 0.29, 0.09, 1.07);
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    user-select: none;
  }
  &:hover {
    &:after {
      content: "Ver mapa completo";
      transform: translate(0, 0);
      border-bottom-left-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-white);
      font-size: var(--font-size-xl);
      text-align: center;
      padding: 15px;
    }
  }
`;

const initForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contacto() {
  const { resetTheme } = useThemeHeader();
  const [form, setForm] = useState(initForm);

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <SectionBasic title="Contactanos" {...PROPS_SECTION}>
      <Container>
        <section>
          <ContainerForm onSubmit={handleSubmit}>
            <div className="inputs-container">
              <InputLabel
                label="Nombre *"
                name="name"
                placeholder="Ingrese su nombre"
                required={true}
                value={form.name}
                onChange={handleChange}
              />
              <InputLabel
                label="Correo electrónico *"
                name="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                required={true}
                value={form.email}
                onChange={handleChange}
              />
              {/* <InputLabel
                label="Teléfono"
                name="phone"
                placeholder="Ingrese su número telefónico"
                type="number"
                value={form.phone}
                onChange={handleChange}
              /> */}
              <TextareaLabel
                label="Mensaje *"
                name="message"
                placeholder="Ingrese su mensaje"
                required={true}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <ContainerControlButtons>
              <ButtonRectangle type="submit">
                <span>Enviar</span>
                <IoMdSend />
              </ButtonRectangle>
            </ContainerControlButtons>
          </ContainerForm>
        </section>
        <section>
          <ContainerMap
            href="https://goo.gl/maps/AGGzSER8SJYGCte67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mapReference} alt="map" />
          </ContainerMap>
        </section>
      </Container>
    </SectionBasic>
  );
}

export default Contacto;
