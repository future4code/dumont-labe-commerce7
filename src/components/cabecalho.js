import React from 'react';


export class Cabecalho extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <img src={this.props.imagem} width="100px"/>
                        </li>
                        <li>

                            <div className="input-buscar">
                                <input name="" />
                                <button type="text"><img src={this.props.lupa} alt="imagem-lupa" width="10px"/></button>
                            </div>

                        </li>
                        <li>
                            <a href="">
                                <img src={this.props.sacola} alt="foto-sacola-de-compras" width="45px" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}