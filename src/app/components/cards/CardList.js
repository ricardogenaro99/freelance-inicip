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
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  @media ${device.mobileL} {
    gap: var(--gap-l);
  }
`;

function Items({
  items,
  controlButtons,
  redirect,
  maxHeightItem,
  widthImage,
  columns = 1,
  heightItem
}) {
  return (
    <ContainerList className="list-container" columns={columns}>
      {items.map((e, i) => (
        <Fragment key={i}>
          <CardBasic
            title={e.title}
            image={e.image || image}
            controlButtons={controlButtons && controlButtons(e)}
            redirect={redirect && e.id.toString()}
            maxHeight={maxHeightItem}
            widthImage={widthImage}
            height={heightItem}
          >
            {e.content}
          </CardBasic>
          {columns === 1 && items.length - 1 !== i && (
            <SeparatorBasic position="-top" />
          )}
        </Fragment>
      ))}
    </ContainerList>
  );
}

function CardList({
  data = [],
  controlButtons,
  redirect,
  initDataPerPage = 8,
  scroll = true,
  maxHeightItem,
  heightItem,
  widthImage,
  columns = 1,
}) {
  // eslint-disable-next-line no-unused-vars
  const [dataPerPage, setdataPerPage] = useState(initDataPerPage);
  const [items, setItems] = useState([]);
  const [range, setRange] = useState({
    start: 0,
    end: dataPerPage,
  });

  useEffect(() => {
    scroll && windowScroll();
    setItems(data.slice(range.start, range.end));
  }, [data, range, scroll]);

  // // useEffect(() => {
  // //   const selected = range.start % dataPerPage
  // //   handlePageClick({ selected });
  // // }, [dataPerPage]);

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
          <Items
            items={items}
            controlButtons={controlButtons}
            redirect={redirect}
            maxHeightItem={maxHeightItem}
            widthImage={widthImage}
            columns={columns}
            heightItem={heightItem}
          />
          {data.length > dataPerPage && (
            <section className="pagination-container">
              <Paginate
                handlePageClick={handlePageClick}
                dataLength={data.length}
                dataPerPage={dataPerPage}
              />
            </section>
          )}
        </>
      ) : (
        <span>No se encontro contenido disponible</span>
      )}
    </Container>
  );
}

export default CardList;
