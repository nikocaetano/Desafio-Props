import React, { Component } from "react";

export default class Main extends Component{
    render(){
        return(
            <>
                <h2>{this.props.nome}</h2>
                <h3>{this.props.idade}</h3>
                <h3>{this.props.estudar}</h3>

            </>
        )
    }
}