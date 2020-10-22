import React from 'react';
import './App.css';
import { Cabecalho } from './components/cabecalho'
import { Produtos } from './components/produtos'
import { Rodape } from "./components/rodape"
import { Filtro } from "./components/filtro"
import logo from "./img/logo.png"
import lupa from "./img/lupa.png"
import sacola from "./img/sacola.png"



class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Cabecalho
            imagem={logo}
            lupa={lupa}
            sacola={sacola}
          />
        </header>

        <hr />

        <section>
          <Filtro />
        </section>

        <hr />

        <section className="produtos">
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 1"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 2"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 3"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 4"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 5"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 6"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 7"}
          />
          <Produtos
            imagem={"https://picsum.photos/100/101"}
            titulo={"Camiseta 8"}
          />
        </section>

        <hr />

        <footer>
          <Rodape />
        </footer>

      </div>
    )
  }
}

export default App;
