import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import { useScrollPosition } from "../hooks";

const countingBoxSize = "150px";

const ContainerCountingBox = styled.div`
  display: flex;
  gap: var(--gap-m) var(--gap-l);
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;
`;

const CountingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${countingBoxSize};
  height: ${countingBoxSize};
  background: ${(props) => props.background};
  font-size: var(--font-size-l);
  color: ${(props) => props.color};
  border-radius: var(--border-radius-global);

  .counter {
    font-size: 2.5em;
    font-weight: 700;
  }

  .label {
    font-size: 1em;
    font-weight: 700;
  }
`;

function CountingBoxComponent({
  end = 0,
  label = "",
  background,
  color = "inherit",
  active = false,
}) {
  return (
    <CountingBox background={background} color={color}>
      {!active ? (
        <span className="counter">0</span>
      ) : (
        <CountUp className="counter" start={0} end={end} duration={1} />
      )}
      {label && <span className="label">{label}</span>}
    </CountingBox>
  );
}

function CountingBoxes() {
  const refContainerCountingBox = useRef();
  const [countUpActive, setCountUpActive] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const scrollTop = scrollPosition;
    const scrollBottom = scrollPosition + window.innerHeight;
    const {
      offsetTop: scrollRefTop,
      clientHeight,
      scrollRefBottom = scrollRefTop + clientHeight,
    } = refContainerCountingBox.current;

    setCountUpActive(
      scrollBottom >= scrollRefTop && scrollRefBottom >= scrollTop
    );
  }, [scrollPosition]);

  return (
    <ContainerCountingBox ref={refContainerCountingBox}>
      <CountingBoxComponent
        active={countUpActive}
        background="var(--color-sub-primary)"
        color="var(--color-white)"
        end={10}
        label="Publicaciones"
      />
      <CountingBoxComponent
        active={countUpActive}
        background="var(--color-orange)"
        end={8}
        label="Investigaciones"
      />
      <CountingBoxComponent
        active={countUpActive}
        background="var(--color-red)"
        end={34}
        label="Lectores"
      />
    </ContainerCountingBox>
  );
}

export default CountingBoxes;
