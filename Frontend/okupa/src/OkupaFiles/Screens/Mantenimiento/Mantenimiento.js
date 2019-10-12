import React, { Component } from 'react';
import Fondo from './../../../Images/bg2.jpg';
import NavBar from './../../Components/Navigation/NavBar';
import {  Link } from 'react-router-dom';
import Logo from './../../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';

export default class Mantenimiento extends Component {

    render() {

        var sectionStyle = {
         zIndex: -10,
         position: 'fixed',
         width: "100%",
         height: "100%",
         backgroundImage: "url(" + Fondo + ")"
       };

     return (
        <div className="home-screen">


            <div style={ sectionStyle } />

            <div className="filtro-fondo" />

            <NavBar />

            <div className="banner">
                <Link to="/">
                    <img src={Logo} alt="okupa"/>
                </Link>
                <h1>Sitio en construcción</h1>
                <p>Vuelva mas tarde.</p>
                <Link to="/">
                    <input type="submit" className="boton-registro" value="Inicio"/>
                </Link>
            </div>
        </div>
        );
    }
}