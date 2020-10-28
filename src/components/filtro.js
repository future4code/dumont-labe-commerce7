import React from "react";

export class Filtro extends React.Component {
    render() {
      return (
      <div>
        <section className="filtro-geral">
        <nav className="filtro-valor">
            <ul>
            <li>
            <input type="number" value={this.props.minFilter}onchange={this.props.onChangeMinFilter} placeholder="Valor Mínimo"/>
            </li>
            <li>
            <input type="number" value={this.props.maxFilter}onchange={this.props.onChangeMaxFilter} placeholder="Valor Máximo"/>
            </li>
            </ul>
        </nav> 
            <nav className="filtro-preco">
            <ul>
            <li>
            <select>
            <option value="Preço: Crescente">Preço:     Crescente</option>
            <option value="Preço: Decrescente">Preço:   Decrescente</option>
            </select>
            </li>
            </ul>
            </nav>
         </section>
        
      </div>
  )
  }
  }