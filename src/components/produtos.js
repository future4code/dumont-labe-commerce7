import React from 'react';

export function Produtos(props) {
    return (
      <div>
        <a href="">
          <img src={props.imagem} alt="produto" width="300px" />
          <h3>{props.nome}</h3>
          <h4>R$ {props.preco} </h4>
        </a>
      </div>
    );
  }