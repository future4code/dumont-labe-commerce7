import React from 'react';

export function Produtos(props) {
    return (
      <div>
        <a href="">
          <img src={props.imagem} alt="produto" />
          <div>{props.titulo}</div>
        </a>
      </div>
    );
  }