import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATHS } from "../../routes";

const Container = styled.div`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--transition);
  transform: scale(1);
  border-radius: calc(var(--border-radius-global) * 2.5);
  overflow: hidden;
  outline: 1.5px solid #67847740;

  cursor: pointer;
  * {
    text-align: left;
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 220px;
  }

  div {
    display: grid;
    gap: var(--gap-s);
    padding: 20px;
    width: 100%;
    h3 {
      font-weight: 700;
      font-size: var(--font-size-xl);
      line-height: 33px;
      color: var(--color-primary);
    }

    span {
      font-weight: 400;
      font-size: var(--font-size-m);
      line-height: 22px;
      color: #868686;
    }
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 2px 1px 10px 3px rgb(7 16 6 / 22%);
  }
`;

function CardNoticia({ id, image, title, createdAt }) {
  const generateProps = () => {
    const props = {
      as: Link,
      to: `/${PATHS.noticias.path}/${String(id)}`,
    };
    if (!id) {
      delete props.as;
      delete props.to;
    }

    return props;
  };

  return (
    <Container {...generateProps()}>
      <img
        src={image || "https://via.placeholder.com/800?text=Sin+Imagen"}
        alt="noticia"
      />
      <div>
        <span>{createdAt}</span>
        <h3>{title}</h3>
      </div>
    </Container>
  );
}

export default CardNoticia;
