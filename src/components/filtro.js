import React from "react";

export class Filtro extends React.Component {
    render() {
      return (
      <div>
        <section className="filtro-geral">
        <nav className="filtro-valor">
            <ul>
            <li>
            <input type="number" placeholder="Valor Mínimo"/>
            </li>
            <li>
            <input type="number" placeholder="Valor Máximo"/>
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