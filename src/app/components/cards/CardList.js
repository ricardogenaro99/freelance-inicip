import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import image from "../../../assets/tmp/images.png";
import { device } from "../../utils/generalBreakpoints";
import { windowScroll } from "../../utils/generalFunctions";
import { SeparatorBasic } from "../Separator";
import CardBasic from "./CardBasic";
import Paginate from "./Paginate";

const Container = styled.div`
  display: grid;
  gap: var(--gap-xxl);
`;

const ContainerList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  @media ${device.mobileL} {
    gap: var(--gap-l);
  }
`;

function Items({ items, controlButtons }) {
  return (
    <ContainerList className="list-container">
      {items.map((e, i) => (
        <Fragment key={i}>
          <CardBasic
            title={e.title}
            image={e.image || image}
            controlButtons={controlButtons && controlButtons(e)}
          >
            {e.content}
          </CardBasic>
          {items.length - 1 !== i && <SeparatorBasic position="-top" />}
        </Fragment>
      ))}
    </ContainerList>
  );
}

function CardList({ data = [], controlButtons }) {
  const [dataPerPage, setdataPerPage] = useState(8);
  const [items, setItems] = useState([]);
  const [range, setRange] = useState({
    start: 0,
    end: dataPerPage,
  });

  useEffect(() => {
    windowScroll();
    setItems(data.slice(range.start, range.end));
  }, [data, range]);

  // useEffect(() => {
  //   const selected = range.start % dataPerPage
  //   handlePageClick({ selected });
  // }, [dataPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * dataPerPage) % data.length;
    setRange({
      start: newOffset,
      end: newOffset + dataPerPage,
    });
  };

  return (
    <Container>
      {data.length > 0 ? (
        <>
          <Items items={items} controlButtons={controlButtons} />
          <section className="pagination-container">
            <Paginate
              handlePageClick={handlePageClick}
              dataLength={data.length}
              dataPerPage={dataPerPage}
            />
          </section>
        </>
      ) : (
        <span>No se encontro contenido disponible</span>
      )}
    </Container>
  );
}

export default CardList;
