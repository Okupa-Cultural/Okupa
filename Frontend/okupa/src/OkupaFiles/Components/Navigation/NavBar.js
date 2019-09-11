import React, { Component } from 'react';
import './css/NavBar.css';
import Logo from './../../../Images/Logo/okupa-logo-blanco-transparente.png';

export default class NavBar extends Component {

    render() {
        return(
            <div className="nav-bar">
                <img src={Logo} alt="Okupa"/>
            </div>
        );
    }
}