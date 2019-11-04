import React, { Component } from 'react';

//CSS
import './css/TarjetaCabecera.css';
//import ProfileEtiquetas from './../Perfil/ProfileEtiquetas';

export default class TarjetaCabecera extends Component {

    render() {

        return (

        <div className="tarjeta-cabecera">
            <div className="tarjeta-fotoperfil"></div>
            <div className="tarjeta-datos">
                <div className="tarjeta-nombre">Leandro Garcia Luzzi</div>
                <div className="tarjeta-fechayhora">21/06/2020 · 23:59</div>
            </div>
        </div>

      );
    }    
}