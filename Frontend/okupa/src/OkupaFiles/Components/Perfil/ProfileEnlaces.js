import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/ProfileCard.css';
import './css/ProfileEnlaces.css';

//Componentes

export default class ProfileEnlaces extends Component {

    render() {
        return(
            <div className="tarjeta-perfil">

                <h3 className="seccion-titulo">Enlaces externos</h3>

                <div className="listado-enlaces">
                    <div className="enlace">
                        <Link to="/">
                            <div className="enlace-icono"><i class="fab fa-facebook-square"></i></div>
                            <div className="enlace-descripcion">Facebook</div>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/">
                            <div className="enlace-icono"><i class="fab fa-twitter-square"></i></div>
                            <div className="enlace-descripcion">Twitter</div>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/">
                            <div className="enlace-icono"><i class="fab fa-instagram"></i></div>
                            <div className="enlace-descripcion">Instagram</div>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/">
                            <div className="enlace-icono"><i class="fab fa-spotify"></i></div>
                            <div className="enlace-descripcion">Spotify</div>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/">
                            <div className="enlace-icono"><i class="fab fa-soundcloud"></i></div>
                            <div className="enlace-descripcion">Soundcloud</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}