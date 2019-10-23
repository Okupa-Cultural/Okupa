import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/TarjetaPie.css';

export default class TarjetaPie extends Component {

    render() {

        return(
            <div className="tarjeta-pie">
                <Link to="/Perfil">
                    <div className="tarjeta-pie-boton">
                        <i class="far fa-sign-language"></i>
                    </div>
                </Link>
                <Link to="/Perfil">
                    <div className="tarjeta-pie-boton con-bordes">
                        <i class="far fa-calendar-alt"></i>
                    </div>
                </Link>
                <Link to="/Perfil">
                    <div className="tarjeta-pie-boton">
                        <i class="far fa-comment-dots"></i>
                    </div>
                </Link>                
            </div>
        );
    }
}