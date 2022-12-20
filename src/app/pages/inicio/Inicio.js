import React, { useCallback, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  carousel_1,
  carousel_2,
  carousel_3,
  carousel_4,
  carousel_5,
  carousel_6,
} from "../../../assets/carousel";
import { SectionWithCarousel } from "../../components";
import { useThemeHeader } from "../../contexts/ThemeHeaderProvider";
import { useScrollPosition } from "../../hooks";
import BoxLogo from "./components/BoxLogo";
import InformacionEscuelas from "./components/InformacionEscuelas";
import UltimasNoticias from "./components/UltimasNoticias";

function Inicio() {
  const { configTheme, resetTheme } = useThemeHeader();
  const scrollPosition = useScrollPosition();

  const initTheme = useCallback(() => {
    configTheme("transparent", null, null, false);
  }, [configTheme]);

  useEffect(() => {
    initTheme();
  }, [configTheme, initTheme]);

  useEffect(() => {
    if (scrollPosition > 80) {
      resetTheme();
    } else {
      initTheme();
    }
  }, [initTheme, resetTheme, scrollPosition]);

  const images = [
    { image: carousel_1, legend: "" },
    { image: carousel_2, legend: "" },
    { image: carousel_3, legend: "" },
    { image: carousel_4, legend: "" },
    { image: carousel_5, legend: "" },
    { image: carousel_6, legend: "" },
  ];

  return (
    <SectionWithCarousel
      images={images}
      carouselFullHeight
      background="linear-gradient(to top, rgba(0, 0, 0, 0.5), var(--color-dark))"
      isMainContent
      staticContent={<BoxLogo />}
      translateY
    >
      <InformacionEscuelas />
      <UltimasNoticias />
    </SectionWithCarousel>
  );
}

export default Inicio;
