import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/TarjetaPie.css';

export default class TarjetaPie extends Component {

    render() {

        return(
            <div className="tarjeta-pie">
                <div className="tarjeta-estadisticas">
                180 Aplausos
                </div>
                <div className="tarjeta-botonera">
                    <Link to="/Perfil">
                        <div className="tarjeta-boton">
                            <i className="far fa-sign-language"></i>
                        </div>
                    </Link>
                    <Link to="/Perfil">
                        <div className="tarjeta-boton con-bordes">
                            <i className="far fa-calendar-alt"></i>
                        </div>
                    </Link>
                    <Link to="/Perfil">
                        <div className="tarjeta-boton">
                            <i className="far fa-comment-dots"></i>
                        </div>
                    </Link>
                </div>
                <div className="separador"></div>               
            </div>
        );
    }
}