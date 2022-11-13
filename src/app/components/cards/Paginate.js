import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const ReactPaginateStyle = styled(ReactPaginate)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-s);
  user-select: none;

  .page-item {
    &.active {
      background: var(--color-primary);
      color: var(--color-white);
      border-radius: var(--border-radius-global);
    }

    .page-link {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 1px 4px;
    }
  }
`;

function Paginate({ handlePageClick, dataLength = 0, dataPerPage = 2 }) {
  const pageCount = Math.ceil(dataLength / dataPerPage);

  return (
    <ReactPaginateStyle
      previousLabel={<GrFormPrevious />}
      nextLabel={<GrFormNext />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={5}
      pageCount={pageCount}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}

export default Paginate;
