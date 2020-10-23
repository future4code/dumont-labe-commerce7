import React from "react";
import {ItensSacola} from "./ItemSacola";

export class Sacola extends React.Component {
  render() {
    return (
      <div className="sacola-pai">
        <h3>Sacola:</h3>

        {this.props.produtos.map((produto) => {
          return <ItensSacola produtos={produto} />
        })}

        <ItensSacola />

        <ItensSacola />

        <ItensSacola />

        <p>Valor total: R$ 100,00</p>
      </div>
    );
  }
}