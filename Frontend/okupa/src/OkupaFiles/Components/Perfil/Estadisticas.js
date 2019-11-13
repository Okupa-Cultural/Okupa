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
                <section className="estadistica">
                    <div className="estadistica-cifra">650</div>
                    <div className="estadistica-label">Seguidores</div>
                </section>
                <section className="estadistica">
                    <div className="estadistica-cifra">121</div>
                    <div className="estadistica-label">Seguidos</div>
                </section>
                <section className="estadistica">
                    <div className="estadistica-cifra">937</div>
                    <div className="estadistica-label">Eventos</div>
                </section>
            </div>
                 
        );
    }
}
