import React, { useEffect } from "react";
import styled from "styled-components";
import { trianglifyLowres } from "../../../assets/extras";
import { portadaPresentacion } from "../../../assets/portadas";
import { SectionBasic, SubSectionBasic } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { device } from "../../utils/generalBreakpoints";

const ContainerMisionVision = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--gap-xl);
  padding: var(--padding-global);
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .vl {
    border: 2px solid var(--color-secondary);
  }

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auro 1fr;
  }
`;

function Presentacion() {
  const { resetTheme } = useThemeHeader();

  useEffect(() => {
    resetTheme();
  }, [resetTheme]);

  return (
    <SectionBasic
      title="Presentacion"
      image={portadaPresentacion}
      isMainContent
    >
      <SubSectionBasic title="Quiénes somos">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere
        animi hic aut perferendis exercitationem perspiciatis eaque earum
        voluptatibus quia corporis iure, ducimus fugiat quo quibusdam alias
        laudantium sit itaque quisquam numquam? Temporibus nisi illum aperiam
        Similique pariatur consequatur at maxime animi ex doloremque id.
        Architecto, fuga? Dignissimos corporis voluptatem eum architecto, vitae
        impedit aspernatur cumque iusto qui! Architecto fuga eius debitis, porro
        fugit sit incidunt ab. Libero enim provident eos magnam corrupti, fugiat
        eveniet aliquam molestias obcaecati odio asperiores dolore iste cumque
        laudantium omnis porro voluptate, esse saepe explicabo neque ipsum
        recusandae sint. Eius ratione a exercitationem quisquam molestias
        deserunt cum consequuntur nostrum, debitis dolores accusamus, illum
        voluptatibus, tempora maiores aperiam accusantium. In explicabo
        recusandae eveniet dignissimos! Recusandae dolorem provident doloremque
        nesciunt temporibus, fuga nihil commodi perspiciatis consectetur natus
        cum deserunt optio! Recusandae odio corporis distinctio debitis
        asperiores, qui, unde, enim labore delectus quisquam atque at
        repellendus ea. Fuga amet porro ducimus impedit, ratione laboriosam enim
        facilis fugit facere? Perspiciatis dolores odio saepe reprehenderit
        porro. Repudiandae totam quos, non consequatur ex consectetur
        exercitationem dolorem itaque necessitatibus reprehenderit soluta
        molestias ea minus velit tempora repellendus deserunt quas nihil
        delectus laudantium? Facilis, odit cupiditate quod magnam veritatis
        quisquam aut repudiandae eius perferendis hic, consequatur ex maxime?
      </SubSectionBasic>

      <ContainerMisionVision image={trianglifyLowres}>
        <SubSectionBasic title="Misión">
          La Policía Nacional del Perú es una institución del Estado que tiene
          por misión garantizar, mantener y restablecer el orden interno,
          prestar protección y ayuda a las personas y a la comunidad, garantizar
          el cumplimiento de las leyes y la seguridad del patrimonio público y
          privado, prevenir, investigar y combatir la delincuencia; vigilar y
          controlar las fronteras; con el propósito de defender a la sociedad y
          a las personas, a fin de permitir su pleno desarrollo, en el marco de
          una cultura de paz y de respeto a los derechos humanos.
        </SubSectionBasic>
        <div className="vl"></div>
        <SubSectionBasic title="Visión">
          Policía moderna, eficiente y cohesionada al servicio de la sociedad y
          del Estado, comprometida con una cultura de paz, con vocación de
          servicio y reconocida por su respeto irrestricto a la persona, los
          derechos humanos, la Constitución y las leyes, por su integración con
          la comunidad, por su honestidad, disciplina y liderazgo de sus
          miembros.
        </SubSectionBasic>
      </ContainerMisionVision>

      <SubSectionBasic title="Estructura organizacional">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        praesentium enim vero cupiditate quis corrupti sunt consequuntur vitae
        incidunt quam ratione deserunt, velit facere quidem non officiis fugiat
        aut adipisci id. Perspiciatis ex id vero, quam voluptatum nulla, placeat
        quo molestias doloribus possimus ipsam, fuga dolores eius neque quidem
        dolor! Sed ab consectetur eius temporibus nisi rerum nihil fugit ex
        repellendus similique, neque id sapiente doloremque cumque ipsum,
        tempore consequuntur iusto, perferendis provident quidem distinctio et
        culpa unde! Nihil, esse sunt! Praesentium reprehenderit amet dicta quos
        fuga nesciunt beatae, rem repudiandae neque aut laudantium asperiores
        soluta nostrum a, nulla facilis?
      </SubSectionBasic>
    </SectionBasic>
  );
}

export default Presentacion;
