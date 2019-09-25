import React, { Component } from 'react';
import './css/NavBar.css';
import Logo from './../../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import { Link } from 'react-router-dom';
//import NavLink from './NavLink';

export default class NavBar extends Component {

    render() {
        return(
            <div className="nav-bar">
                <img src={Logo} alt="Okupa"/>

                <div className="nav-bar-links">
                	<p className="nav-bar-titulo">OKUPA</p>
                    <Link to="/registro">
                        <input type="submit" className="boton-registro" value="Registrarse"/>
                    </Link>
                    <Link to="/dashboard">
                        <input type="submit" className="boton-registro" value="Iniciar Sesión"/>
                    </Link>
                </div>
            </div>
        );
    }
}