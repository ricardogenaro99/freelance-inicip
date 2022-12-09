import React from "react";
import styled from "styled-components";
import portadaNoticia_1 from "../../../../assets/tmp/noticia (1).png";
import portadaNoticia_2 from "../../../../assets/tmp/noticia (2).png";

const ContainerSchoolInformation = styled.div`
  display: grid;
  > section {
    padding: 30px 0;
    display: grid;
    gap: var(--gap-xl);

    &:nth-child(1) {
      grid-template-columns: 1.7fr 2fr;
    }

    &:nth-child(2) {
      grid-template-columns: 2fr 1.7fr;
    }

    .image-container {
      border-radius: 20px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const SectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-m);
  padding: 10px;
  h4 {
    color: var(--color-primary);
    text-align: center;
    font-size: var(--font-size-xxl);
  }
`;

const SectionInfo = ({ title, children }) => {
  return (
    <SectionInfoContainer>
      <h4>{title}</h4>
      <div>{children}</div>
    </SectionInfoContainer>
  );
};

function InformacionEscuelas() {
  return (
    <ContainerSchoolInformation>
      <section>
        <div className="image-container">
          <img src={portadaNoticia_1} alt="" />
        </div>
        <SectionInfo title="Conócenos">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            voluptate quis dolor aliquam modi dolorum. Odio odit architecto
            rerum, animi alias quasi impedit voluptatibus officiis dignissimos
            magni similique blanditiis velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere esse odit omnis cupiditate, reiciendis similique, natus sit
            ipsam laboriosam dolorem eaque. Sit hic, incidunt ex ea facilis
            voluptates explicabo?
          </p>
        </SectionInfo>
      </section>
      <section>
        <SectionInfo title="Escuela Nacional">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            voluptate quis dolor aliquam modi dolorum. Odio odit architecto
            rerum, animi alias quasi impedit voluptatibus officiis dignissimos
            magni similique blanditiis velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere esse odit omnis cupiditate, reiciendis similique, natus sit
            ipsam laboriosam dolorem eaque. Sit hic, incidunt ex ea facilis
            voluptates explicabo?
          </p>
        </SectionInfo>
        <div className="image-container">
          <img src={portadaNoticia_2} alt="" />
        </div>
      </section>
    </ContainerSchoolInformation>
  );
}

export default InformacionEscuelas;
