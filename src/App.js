import React from 'react';
import './App.css';
import { Cabecalho } from './components/cabecalho'
import { Produtos } from './components/produtos'
import { Rodape } from "./components/rodape"
import { Filtro } from "./components/filtro"

import { Sacola } from "./components/Sacola/Sacola";

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
  state ={
    minFilter:20,
    maxFilter:100,
    nameFilter:'TESTE',

    produtos: [
    {
      id: 1,
      imagem: blusaPlanetaAzul,
      nome: "Blusa Planeta Azul",
      preco: 199,
    },
    {
      id: 2,
      imagem: estacaoEspacial,
      nome: "Camiseta Estação Espacial",
      preco :100,
    },
    {
      id: 3,
      imagem: astronautaPlanetas,
      nome: "Camiseta Astronauta Ballon",
      preco: 59,
    },
    {
      id: 4,
      imagem: astronauta,
      nome: "Camiseta Astronauta",
      preco: 80,
    },
    {
      id: 5,
      imagem: discoVoador,
      nome: "Blusa Disco Voador",
      preco: 250,
    },
    {
      id: 6,
      imagem: saturno,
      nome: "Camiseta Planeta Saturno",
      preco: 79,
    },
    {
      id: 7,
      imagem: planetas,
      nome: "Blusa Planetas",
      preco: 190,
    },
    {
      id: 8,
      imagem: galaxia,
      nome: "Camiseta Galáxia",
      preco: 49,
    },
    ]
    } 

  render() {

      return(
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
         <Sacola produtos={this.state.produtos} />

          <Filtro 
         
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}/>
    
        </section>

        <hr />
        <section className="produtos">
          {this.state.produtos.map((produto)=> {
            return <Produtos imagem={produto.imagem} nome={produto.nome} preco={produto.preco}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nasmeFilter={this.state.nameFilter}/>
          })
         
        }
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