import React, { Component } from 'react';

//CSS
import './css/Estadisticas.css'

export default class Estadisticas extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="datosusuario-estadisticas">
                <seccion className="estadistica">
                    <div className="estadistica-cifra">650</div>
                    <div className="estadistica-label">Seguidores</div>
                </seccion>
                <seccion className="estadistica">
                    <div className="estadistica-cifra">121</div>
                    <div className="estadistica-label">Seguidos</div>
                </seccion>
                <seccion className="estadistica">
                    <div className="estadistica-cifra">937</div>
                    <div className="estadistica-label">Eventos</div>
                </seccion>
            </div>
                 
        );
    }
}
