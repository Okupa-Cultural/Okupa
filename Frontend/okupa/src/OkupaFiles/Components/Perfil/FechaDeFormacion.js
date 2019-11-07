import React, { Component } from 'react';

//CSS
import './css/SeccionesColumnaIzq.css';

export default class FechaDeFormacion extends Component {

    render() {
        return(
            <seccion className="seccion">
                <h4 className="seccion-titulo">
                Fecha de formación
                </h4>
                <div className="seccion-caja">
                  13/10/2017
                </div>
            </seccion>
        );
    }
}