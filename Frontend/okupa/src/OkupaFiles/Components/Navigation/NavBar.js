import React, { Component } from 'react';
import './css/NavBar.css';
import Logo from './../../../Images/Logo/okupa-logo-blanco-transparente.png';
import NavLink from './NavLink';

export default class NavBar extends Component {

    render() {
        return(
            <div className="nav-bar">
                <img src={Logo} alt="Okupa"/>

                <div className="nav-bar-links">
                	<NavLink link="/" titulo="Inicio" />
                	<NavLink link="/Dashboard" titulo="Dashboard" />
                </div>
            </div>
        );
    }
}