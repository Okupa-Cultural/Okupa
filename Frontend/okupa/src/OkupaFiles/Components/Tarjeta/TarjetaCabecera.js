import React, { Component } from 'react';

//CSS
import './css/TarjetaCabecera.css';

export default class TarjetaCabecera extends Component {

    render() {

        return (

        <div className="tarjeta-cabecera">
            <div className="tarjeta-fotoperfil"></div>
            <div className="tarjeta-datos">
                <div className="tarjeta-nombre">{this.props.name}</div>
                <div className="tarjeta-fechayhora">{this.props.date}</div>
            </div>
        </div>

      );
    }    
}