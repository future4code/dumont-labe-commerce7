import React from 'react';

export class Produtos extends React.Component {
  render() {
    return (
      <div className="produtoIndividual">
        <img src = {this.props.imagem} width="350px" />
        <p>{this.props.nome}</p>
        <p>R$ {this.props.preco},00</p>
        <button>COMPRAR</button>
      </div>
    )
  }
}