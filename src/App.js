import React from 'react';
import './App.css';
import { Cabecalho } from './components/cabecalho'
import { Produtos } from './components/produtos'
import { Rodape } from "./components/rodape"
import { Filtro } from "./components/filtro"
import logo from "./img/logo.png"
import lupa from "./img/lupa.png"
import sacola from "./img/sacola.png"
import estacaoEspacial from "./img/camiseta-estacao-espacial.jpg"
import blusaPlanetaAzul from "./img/blusa-planeta-azul.jpg"
import astronautaPlanetas from "./img/camiseta-astronauta-planetas.jpg"
import discoVoador from "./img/blusa-disco-voador.jpg"
import saturno from "./img/camiseta-saturno.png"
import planetas from "./img/blusa-planetas.jpg"
import galaxia from "./img/Camiseta-galaxia.jpg"
import astronauta from "./img/camieta-astronauta.png"

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
            imagem={blusaPlanetaAzul}
            nome={"Blusa Planeta Azul"}
            preco={199.00}
          />
          <Produtos
            imagem={estacaoEspacial}
            nome={"Camiseta Estação Espacial"}
            preco={100.00}
          />
          <Produtos
            imagem={astronautaPlanetas}
            nome={"Camiseta Astronauta Ballon"}
            preco={59.90}
          />
          <Produtos
            imagem={astronautaPlanetas}
            nome={"Camiseta Astronauta"}
            preco={80.00}
          />
          <Produtos
            imagem={discoVoador}
            nome={"Blusa Disco Voador"}
            preco={250.00}
          />
          <Produtos
            imagem={saturno}
            nome={"Camiseta Planeta Saturno"}
            preco={79.90}
          />
          <Produtos
            imagem={planetas}
            nome={"Blusa Planetas"}
            preco={190.00}
          />
          <Produtos
            imagem={galaxia}
            nome={"Camiseta Galáxia"}
            preco={49.90}
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
