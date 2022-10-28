import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import {
  carousel_1,
  carousel_2,
  carousel_3,
  carousel_4
} from "../../assets/carousel";
import { CarouselItem, SectionBasic, SubSectionBasic } from "../components";

const Container = styled.div``;

function Inicio() {
  return (
    <SectionBasic>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <CarouselItem image={carousel_1} />
        <CarouselItem image={carousel_2} />
        <CarouselItem image={carousel_3} />
        <CarouselItem image={carousel_4} />
      </Carousel>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum doloremque
        iste dolores corporis error natus blanditiis molestiae sapiente alias at
        accusamus cupiditate nemo perspiciatis quasi est repellendus accusantium
        modi praesentium, minus non ut officia obcaecati sint perferendis. Odit
        quia blanditiis enim deleniti praesentium repellendus dolor delectus
        fugit quibusdam molestias doloremque voluptates error, natus accusamus,
        voluptatum nostrum quasi. Impedit provident quos nihil perspiciatis
        itaque illum. Quibusdam enim ullam itaque nisi officia voluptate fugiat
        recusandae sunt reprehenderit assumenda! Obcaecati nesciunt rem
        cupiditate. Inventore, similique iure optio quas numquam, facere id at
        laborum delectus in dolorum nisi molestiae enim quisquam suscipit.
        Repellat, itaque?
      </p>
      <SectionBasic title='Últimas Publicaciones'>

      </SectionBasic>
    </SectionBasic>
  );
}

export default Inicio;
