import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//CSS
import './css/SeccionesColumnaIzq.css'

export default class EnlacesExternos extends Component {

    render() {
        return(
            <section className="seccion">
                <h4 className="seccion-titulo">
                Enlaces externos
                </h4>
                <div className="seccion-caja">
                    <ul>
                        <li className="enlaceexterno">
                            <Link to="/perfil">
                                <i className="fab fa-facebook-square"></i>
                                Facebook
                            </Link>
                        </li>
                        <li className="enlaceexterno">
                        <Link to="/perfil">
                            <i className="fab fa-twitter-square"></i>
                            Twitter
                        </Link>
                        </li>
                        <li className="enlaceexterno">
                        <Link to="/perfil">
                            <i className="fab fa-instagram"></i>
                            Instagram
                        </Link>
                        </li>
                        <li className="enlaceexterno">
                        <Link to="/perfil">
                            <i className="fab fa-spotify"></i>
                            Spotify
                        </Link>
                        </li>
                        <li className="enlaceexterno">
                        <Link to="/perfil">
                            <i className="fab fa-soundcloud"></i>
                            Soundcloud
                        </Link>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}