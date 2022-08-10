import React, { Component } from "react";
import Main from "./Components/Main.js"

export default class DesProps extends Component {
  render() {
    return (
      <>
        <h1>Desafio Props</h1>
        <Main 
        nome="Meu nome é Nikolas"
        idade="Tenho 24 anos"
        estudar="Estou aprendendo a tocar violão"
        />
      </>
    )
  }
}