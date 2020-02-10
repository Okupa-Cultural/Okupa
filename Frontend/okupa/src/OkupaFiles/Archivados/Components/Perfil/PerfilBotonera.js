import React, { Component } from 'react';

//CSS
import './css/PerfilBotonera.css'

export default class PerfilBotonera extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="cabecera-botonera">
                <button>
                    <div className="botonera-boton">
                        Seguir
                    </div>
                </button>
                <button>
                    <div className="botonera-boton">
                        Invitar
                    </div>
                </button>
            </div>
                 
        );
    }
}
